import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme/common.theme';

interface InputLabelProps {
  title: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({title}) => {
  return (
    <View style={{marginVertical: 6}}>
      <Text style={styles.inputLabel}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 12,
    color: COLORS.secondaryBlack,
  },
});
