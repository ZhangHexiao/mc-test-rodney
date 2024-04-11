import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ImageSourcePropType,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {DashboardRoutes} from './dashboard.stack';
import {COLORS, FONTS} from '../../atomic/theme/common.theme';
import {images} from '../constants/index';
import {Button} from '../../atomic/atoms/button.component';
import ConnectSuccessModal from '../../atomic/organisms/connect.success.modal';
import ConnectProviderModal, {
  ConnectProviderModalProps,
} from '../../atomic/organisms/connect.provider.modal';
import ProviderConnection from '../../atomic/molecules/provider.connection.component';
import {simulateAsyncCall} from '../util/utility';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

const OnboardingDashboardScreen: React.FC<ScreenProps> = ({navigation}) => {
  const providerList = [
    {
      colorTheme: COLORS.black,
      key: 'netflix',
      icon: images.netflix,
      connectProviderRequest: async () => {
        await simulateAsyncCall();
        setConnectStatus(preMap => preMap.set('netflix', true));
      },
    },
    {
      colorTheme: COLORS.success,
      key: 'spotify',
      icon: images.spotify,
      connectProviderRequest: async () => {
        await simulateAsyncCall();
        setConnectStatus(preMap => preMap.set('spotify', true));
      },
    },
    {
      colorTheme: COLORS.white,
      key: 'uberEats',
      icon: images.uberEats,
      connectProviderRequest: async () => {
        await simulateAsyncCall();
        setConnectStatus(preMap => preMap.set('uberEats', true));
      },
    },
    {
      colorTheme: COLORS.success,
      key: 'starbucks',
      icon: images.starbucks,
      connectProviderRequest: async () => {
        await simulateAsyncCall();
        setConnectStatus(preMap => preMap.set('starbucks', true));
      },
    },
  ];

  const [connectStatus, setConnectStatus] = useState(
    new Map<string, boolean>([
      ['netflix', false],
      ['spotify', false],
      ['uberEats', false],
      ['starbucks', false],
    ]),
  );

  const [providerInfo, setProviderInfo] = useState<ConnectProviderModalProps>();
  const [connectProviderModalVisible, setConnectProviderModalVisible] =
    useState(false);
  const [connectSuccessModalVisible, setConnectSuccessModalVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const anyConnected = () => {
    return (
      connectStatus.get('spotify') ||
      connectStatus.get('netflix') ||
      connectStatus.get('uberEats') ||
      connectStatus.get('starbucks')
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View>
        <Text style={styles.title}>Connect service providers</Text>
        <Text style={styles.subTitle}>
          Select accounts you have that you would like to update with your new
          credit card
        </Text>
      </View>

      <View style={styles.providerContainer}>
        {providerList.map(item => {
          return (
            <ProviderConnection
              key={item.key}
              logo={item.icon}
              isConnected={connectStatus.get(item.key) as boolean}
              onPressConnect={() => {
                setConnectProviderModalVisible(true);
                setProviderInfo({
                  providerLogo: item.icon,
                  isOpen: connectProviderModalVisible,
                  colorThem: item.colorTheme,
                  closeModal: () => {
                    setConnectProviderModalVisible(false);
                  },
                  connectProviderAction: item.connectProviderRequest,
                  isLoading: isLoading,
                });
              }}
            />
          );
        })}
      </View>

      <ConnectProviderModal
        providerLogo={providerInfo?.providerLogo as ImageSourcePropType}
        colorThem={providerInfo?.colorThem as string}
        isOpen={connectProviderModalVisible}
        isLoading={isLoading}
        closeModal={() =>
          setConnectProviderModalVisible(!connectProviderModalVisible)
        }
        connectProviderAction={async () => {
          setIsLoading(true);
          await providerInfo?.connectProviderAction();
          setIsLoading(false);
          setConnectProviderModalVisible(!connectProviderModalVisible);
          setConnectSuccessModalVisible(!connectSuccessModalVisible);
        }}
      />
      <ConnectSuccessModal
        isOpen={connectSuccessModalVisible}
        toggleModal={() =>
          setConnectSuccessModalVisible(!connectSuccessModalVisible)
        }
      />

      <View style={styles.footer}>
        <Button
          style={{marginVertical: 8}}
          title="Continue"
          filled
          disable={!anyConnected()}
          backgroundColor={anyConnected() ? COLORS.primary : COLORS.grey200}
          onPress={() => {
            navigation.navigate('RootTabs');
          }}
        />
        <Button
          style={{marginVertical: 8}}
          title="Skip for now"
          onPress={() => {
            navigation.navigate('RootTabs');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },

  title: {
    ...FONTS.H5,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
    marginHorizontal: 24,
    marginVertical: 24,
  },

  subTitle: {
    ...FONTS.P1,
    textAlign: 'center',
    marginHorizontal: 37,
    fontWeight: '600',
    color: COLORS.grey800,
  },

  providerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
    marginHorizontal: 12,
  },

  footer: {
    width: '100%',
    marginVertical: 12,
    position: 'absolute',
    bottom: 22,
    right: 16,
    left: 16,
  },
});

export default OnboardingDashboardScreen;
