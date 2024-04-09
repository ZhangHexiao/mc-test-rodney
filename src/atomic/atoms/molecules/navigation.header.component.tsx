import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, FONTS, SIZES} from '../../theme/common.theme';

interface NavigationHeaderProps {
  title: string;
}
export const NavigationHeader: React.FC<NavigationHeaderProps> = ({title}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.primary, COLORS.secondary]}
      style={[styles.headerContainer, {paddingTop: insets.top}]}>
      <Text style={styles.headerText}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 92, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    ...FONTS.H6,
    fontWeight: '600',
  },
});
