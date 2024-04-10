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
import {CardControlsButton} from '../../atomic/atoms/card_controls_button_component';
import {CardControlsListItem} from '../../atomic/atoms/card_controls_list_item_component';

//navigation-- add in to {} for doing navigation to card controles
const CardControlsScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <CardControlsButton
            icon={icons.pin}
            label="Reset PIN"
            onPress={() => {}}
          />
          <CardControlsButton
            icon={icons.bell}
            label="Notifications"
            onPress={() => {}}
          />
          <CardControlsButton
            icon={icons.pin}
            label="Notifications"
            onPress={() => {}}
          />
          <CardControlsButton
            icon={icons.bell}
            label="Notifications"
            onPress={() => {}}
          />
        </View>
        <CardControlsListItem
          icon={icons.faceId}
          label="Face ID"
          details="Enabled"
          onPress={() => {}}
        />
        <CardControlsListItem
          icon={icons.faceId}
          label="Face ID"
          details="Enabled"
          onPress={() => {}}
        />
        <CardControlsListItem
          icon={icons.faceId}
          label="Face ID"
          details="Enabled"
          onPress={() => {}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
});
export default CardControlsScreen;
