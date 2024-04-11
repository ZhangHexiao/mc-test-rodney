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
  SectionList,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {COLORS, FONTS, SIZES} from '../../atomic/theme/common.theme';
import {images, icons} from '../constants/index';
import {Button} from '../../atomic/atoms/button.component';
import {InputLabel} from '../../atomic/atoms/input.label.component';
import {Input} from '../../atomic/atoms/input.component';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../atomic/molecules/card';
import babelConfig from 'babel.config';
import {blue} from 'react-native-reanimated';
import CarOperationModal from '../../atomic/organisms/card.operation.modal';
import {ScrollView} from 'react-native-gesture-handler';
import {CardControlsButton} from '../../atomic/atoms/card.controls.button.component';
import {CardControlsListItem} from '../../atomic/atoms/card.controls.list.item.component';

//navigation-- add in to {} for doing navigation to card controles
const CardControlsScreen: React.FC = () => {
  const buttonsInfoList = [
    {
      icon: icons.pin,
      label: 'Reset PIN',
      onPress: () => {},
    },
    {
      icon: icons.bell,
      label: 'Notification',
      onPress: () => {},
    },
    {
      icon: icons.card,
      label: 'Request New Card',
      onPress: () => {},
    },
    {
      icon: icons.sort,
      label: 'Adjust Credit Limit',
      onPress: () => {},
    },
  ];

  const controlItemList = [
    {
      title: 'First Section',
      data: [
        {
          id: '1',
          icon: icons.faceId,
          label: 'Face ID',
          onPress: () => {},
          details: 'Enabled',
        },
        {
          id: '2',
          icon: icons.wallet,
          label: 'Apple Wallet',
          onPress: () => {},
          details: 'Open',
        },
        {
          id: '3',
          icon: icons.recurring,
          label: 'Auto Pay',
          onPress: () => {},
          details: 'Enabled',
        },
        {
          id: '4',
          icon: icons.leaf,
          label: 'Online Statement',
          onPress: () => {},
          details: 'Enabled',
        },
      ],
    },
    {
      title: 'Second Section',
      data: [
        {
          id: '5',
          icon: icons.zhen,
          label: 'Management Subscriptions',
          onPress: () => {},
          details: '2',
        },
        {
          id: '6',
          icon: icons.personAdd,
          label: 'Authorizaed Users',
          onPress: () => {},
          details: '1',
        },
      ],
    },
    {
      title: 'Third Section',
      data: [
        {
          id: '7',
          icon: icons.alertTriangle,
          label: 'Spend Limit Settings',
          onPress: () => {},
          details: '',
        },
        {
          id: '8',
          icon: icons.globel,
          label: 'Overseas Spend Settings',
          onPress: () => {},
          details: '',
        },
      ],
    },
    {
      title: 'Forth Section',
      data: [
        {
          id: '9',
          icon: icons.contactless,
          label: 'Tap & Pay',
          onPress: () => {},
          details: '',
        },
        {
          id: '10',
          icon: icons.metery,
          label: 'FICO Score',
          onPress: () => {},
          details: '',
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SectionList
          ListHeaderComponent={
            <View style={styles.buttonContainer}>
              {buttonsInfoList.map(item => (
                <CardControlsButton
                  icon={item.icon}
                  label={item.label}
                  onPress={item.onPress}
                />
              ))}
            </View>
          }
          sections={controlItemList}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => (
            <CardControlsListItem
              icon={item.icon}
              label={item.label}
              onPress={item.onPress}
              details={item.details}
            />
          )}
          renderSectionHeader={() => <View style={styles.sectionSpacer} />}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },

  sectionSpacer: {
    height: 20,
  },
});
export default CardControlsScreen;
