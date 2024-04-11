import {View, StyleSheet, TextInput, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../theme/common.theme';
import {icons} from '../../app/constants/index';

interface InputProps {
  id: string;
  placeholder?: string;
  placeholderTextColor?: string;
  style?: object;
  secureTextEntry?: boolean;
  onInputChanged: (id: string, text: string) => void;
}

export const Input: React.FC<InputProps> = props => {
  const onChangeText = (text: string) => {
    props.onInputChanged(props.id, text);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.inputContainer,
          ...{borderColor: COLORS.black},
          ...props.style,
        }}>
        <TextInput
          {...props}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
        />
        {props.secureTextEntry && (
          <Image source={icons.eyeOff} style={styles.icon} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: COLORS.superLight,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    borderRadius: 4,
    borderWidth: 0.3,
    borderColor: COLORS.black,
    marginVertical: 5,
    flexDirection: 'row',
    marginBottom: 8,
    height: 48,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    color: COLORS.black,
    flex: 1,
    paddingTop: 0,
    textAlignVertical: 'top',
  },
});
