import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS} from '../theme/common.theme';

interface InputLabelProps {
  title: string;
}

export const InputLabel: React.FC<InputLabelProps> = props => {
  return (
    <View style={{marginVertical: 6}}>
      <Text style={styles.inputLabel}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    ...FONTS.Label,
    color: COLORS.black,
  },
});
