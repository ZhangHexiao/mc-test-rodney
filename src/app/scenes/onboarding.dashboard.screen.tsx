import React, {useCallback, useReducer, useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';
import {DashboardRoutes} from './dashboard.stack';
import {COLORS, FONTS, SIZES} from '../../atomic/theme/common.theme';
import {images, icons} from '../constants/index';
import {Button} from '../../atomic/atoms/button.component';
import {InputLabel} from '../../atomic/atoms/input.label.component';
import {Input} from '../../atomic/atoms/input.component';
import LinearGradient from 'react-native-linear-gradient';
import {HomeTabRoutes} from './tabs/tabs.stack';
import ConnectSuccessModal from '../../atomic/organisms/connect.success.modal';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

const OnboardingDashboardScreen: React.FC<ScreenProps> = ({navigation}) => {
  const [connectModalVisible, setConnectModalVisible] = useState(false);
  const [connectSuccessModalVisible, setConnectSuccessModalVisible] =
    useState(false);
  const inputChangedHandler = useCallback(
    (inputId: string, inputValue: string) => {},
    [],
  );

  const theme = useTheme();
  const connectProviderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={connectModalVisible}>
        <View style={styles.modalContainer}>
          <View
            style={{
              ...styles.modal,
              borderTopWidth: 8,
              borderTopColor: COLORS.sportifyGreen,
            }}>
            <TouchableOpacity
              style={styles.closeIconStyle}
              onPress={() => {
                setConnectModalVisible(false);
              }}>
              <Image source={icons.closeMark} resizeMode="contain"></Image>
            </TouchableOpacity>
            <Image
              source={images.spotify}
              resizeMode="contain"
              style={styles.modalImage}
            />
            <Text style={styles.title}>Connect Spotify</Text>
            <View style={{margin: 16}}>
              <InputLabel title="User Name" />
              <Input
                id="userName"
                onInputChanged={inputChangedHandler}
                placeholder="user@gmail.com"
                placeholderTextColor={COLORS.black}
              />
              <InputLabel title="Password" />
              <Input
                id="userPassword"
                onInputChanged={inputChangedHandler}
                placeholder="••••••••••"
                placeholderTextColor={COLORS.black}
                secureTextEntry
              />
            </View>
            <Button
              title="Connect"
              filled
              onPress={() => {
                setConnectModalVisible(false);
              }}
              backgroundColor={theme.COLORS.black}
              style={styles.modalBtn}
            />
          </View>
        </View>
      </Modal>
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
        <View style={{...styles.providerBox, ...styles.providerBoxShadow}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.netflix}
              resizeMode="contain"></Image>
          </View>
          <Button
            title="Connect"
            small
            onPress={() => {
              setConnectSuccessModalVisible(true);
            }}
          />
        </View>
        <View style={{...styles.providerBox, ...styles.providerBoxBorder}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.spotify}
              resizeMode="contain"></Image>
          </View>
          <Image
            style={styles.checkIconStyle}
            source={icons.checkMark}
            resizeMode="contain"></Image>
          <Button
            title="Connect"
            small
            filled
            onPress={() => {
              setConnectModalVisible(true);
            }}
          />
        </View>
        <View style={{...styles.providerBox, ...styles.providerBoxShadow}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.uberEats}
              resizeMode="contain"></Image>
          </View>
          <Button title="Connect" small onPress={() => {}} />
        </View>
        <View style={{...styles.providerBox, ...styles.providerBoxShadow}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.starbucks}
              resizeMode="contain"></Image>
          </View>
          <Button title="Connect" small onPress={() => {}} />
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          style={{marginVertical: 8}}
          title="Continue"
          filled
          disable
          backgroundColor={COLORS.grey200}
          onPress={() => {}}
        />
        <Button
          style={{marginVertical: 8}}
          title="Skip for now"
          onPress={() => {
            navigation.navigate('RootTabs');
          }}
        />
      </View>
      {connectProviderModal()}
      <ConnectSuccessModal
        isOpen={connectSuccessModalVisible}
        toggleModal={() =>
          setConnectSuccessModalVisible(!connectSuccessModalVisible)
        }
      />
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
    ...FONTS.H6,
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

  providerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    paddingVertical: 16,
    width: (SIZES.width - 24) / 2 - 16,
  },

  providerBoxShadow: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: COLORS.gray,
  },

  providerBoxBorder: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: COLORS.primary,
  },

  imageContainer: {
    marginHorizontal: 36,
    marginBottom: 12,
  },

  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    padding: 30,
    borderRadius: (SIZES.width - 24) / 2,
  },

  checkIconStyle: {
    width: 20,
    height: 20,
    aspectRatio: 1,
    position: 'absolute',
    top: 5,
    right: 5,
  },

  closeIconStyle: {
    width: 10,
    height: 10,
    aspectRatio: 1,
    position: 'absolute',
    top: 10,
    right: 10,
  },

  footer: {
    width: '100%',
    marginVertical: 12,
    position: 'absolute',
    bottom: 22,
    right: 16,
    left: 16,
  },
  // ==================
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modal: {
    height: 526,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    padding: 16,
  },
  modalBtn: {
    width: '100%',
    backgroundColor: COLORS.black,
    position: 'absolute',
    bottom: 24,
  },
  modalImage: {
    height: SIZES.width * 0.2,
    width: SIZES.width * 0.2,
    marginVertical: 22,
    borderRadius: (SIZES.width * 0.2) / 2,
  },
});

export default OnboardingDashboardScreen;
