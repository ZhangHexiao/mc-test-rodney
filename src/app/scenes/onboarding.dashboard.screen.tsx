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
import {Button} from '../../atomic/atoms/button/button.component';
import {InputLabel} from '../../atomic/atoms/button/input.label.component';
import {Input} from '../../atomic/atoms/button/input.component';
import LinearGradient from 'react-native-linear-gradient';

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

  const connectSuccessModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={connectSuccessModalVisible}>
        <View style={styles.modalContainer}>
          <View style={{...styles.modalSuccess}}>
            <LinearGradient
              colors={['#E35205', '#F98E20']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.sucessCircleContainer}>
              <Image source={icons.successCircle} resizeMode="contain"></Image>
            </LinearGradient>
            <View style={{paddingTop: 24}}>
              <View style={styles.titleContainer}>
                <Text style={styles.successTitle}>All Set!</Text>
              </View>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Enjoy your digital journey</Text>
              </View>
            </View>

            <Button
              title="View Dashboard"
              filled
              onPress={() => {
                setConnectSuccessModalVisible(false);
              }}
              style={styles.modalSuccessBtn}
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Connect service providers</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Select accounts you have that you would like to update with your new
            credit card
          </Text>
        </View>
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
      {connectSuccessModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },

  titleContainer: {
    marginHorizontal: 24,
    marginVertical: 24,
    alignItems: 'center',
  },

  title: {
    ...FONTS.H5,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
  },

  subTitleContainer: {
    marginHorizontal: 37,
    alignItems: 'center',
  },

  subTitle: {
    ...FONTS.P1,
    color: COLORS.black,
    textAlign: 'center',
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

  // ==================
  successTitle: {
    ...FONTS.H4,
    color: COLORS.black,
    textAlign: 'center',
  },
  modalSuccess: {
    height: 388,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    alignItems: 'center',
    padding: 16,
  },
  modalSuccessBtn: {
    width: '100%',
    position: 'absolute',
    bottom: 24,
  },
  sucessCircleContainer: {
    height: 80,
    width: 80,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: COLORS.white,
    borderWidth: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -40,
  },
});

export default OnboardingDashboardScreen;
