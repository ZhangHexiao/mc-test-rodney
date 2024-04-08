import React, {FC, Fragment, useCallback, useReducer, useState} from 'react';
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
  FlatList,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {COLORS, FONTS, SIZES} from '../../../atomic/theme/common.theme';
import {images, icons} from '../../constants/index';
import {Button} from '../../../atomic/atoms/button/button.component';
import {InputLabel} from '../../../atomic/atoms/button/input.label.component';
import {Input} from '../../../atomic/atoms/button/input.component';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../../atomic/atoms/molecules/card';
import babelConfig from 'babel.config';
import {blue} from 'react-native-reanimated';

//navigation-- add in to {} for doing navigation to card controles
const HomeTabScreen = ({}) => {
  const userCards = [
    {
      cardNumber: 'Mastercard •••• 1234',
      cardType: images.cardType1,
    },
    {
      cardNumber: 'Mastercard •••• 4567',
      cardType: images.cardType1,
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={{alignItems: 'center'}}>
        <View style={styles.cardListContainer}>
          <FlatList
            horizontal
            data={userCards}
            snapToAlignment="center"
            keyExtractor={(item, index) => index.toString()}
            contentInset={{
              left: (SIZES.width - 260) / 2 + 6,
              right: (SIZES.width - 260) / 2 + 6,
            }}
            snapToInterval={260}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Card
                cardNumber={item.cardNumber}
                cardType={item.cardType}
                onPress={() => console.log('Card Pressed')}
              />
            )}
          />
        </View>
        <View style={styles.walletIconContainer}>
          <Image
            style={styles.walletStyle}
            source={images.appleWallet}
            resizeMode="contain"></Image>
        </View>
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

  cardListContainer: {
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },

  walletIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 136,
  },

  walletStyle: {
    height: '100%',
  },
});

export default HomeTabScreen;
