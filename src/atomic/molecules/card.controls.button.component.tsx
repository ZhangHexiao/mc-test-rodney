import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../theme/common.theme';

interface CardControlsButtonProps {
  icon: ImageSourcePropType;
  label: string;
  onPress: () => void;
}

export const CardControlsButton: React.FC<CardControlsButtonProps> = ({
  icon,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 4,
    margin: 8,
    width: (SIZES.width - 24) / 2 - 16,
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  icon: {
    width: 22,
    height: 22,
    marginBottom: 16,
  },
  buttonLabel: {
    ...FONTS.P1,
    color: COLORS.primary,
  },
});
