import React, {FC, Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';
import {DashboardRoutes} from './dashboard.stack';
import {COLORS, FONTS, SIZES} from '../../atomic/theme/common.theme';
import {images} from '../constants/index';
import {Button} from '../../atomic/atoms/button/button.component';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

const OnboardingDashboardScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();
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
        <View style={styles.providerBox}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.netflix}
              resizeMode="contain"></Image>
          </View>
          <Button title="Connect" small onPress={() => {}} />
        </View>
        <View style={styles.providerBox}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.spotify}
              resizeMode="contain"></Image>
          </View>
          <Button title="Connect" small filled onPress={() => {}} />
        </View>
        <View style={styles.providerBox}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={images.uberEats}
              resizeMode="contain"></Image>
          </View>
          <Button title="Connect" small onPress={() => {}} />
        </View>
        <View style={styles.providerBox}>
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
          onPress={() => {}}
        />
        <Button
          style={{marginVertical: 8}}
          title="Skip for now"
          filled
          onPress={() => {}}
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

  titleContainer: {
    marginHorizontal: 24,
    marginVertical: 24,
    alignItems: 'center',
  },

  title: {
    ...FONTS.h2,
    color: COLORS.black,
    textAlign: 'center',
  },

  subTitleContainer: {
    marginHorizontal: 37,
    alignItems: 'center',
  },

  subTitle: {
    ...FONTS.h3,
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
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: COLORS.gray,
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
