import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../theme/common.theme';

interface NavigationHeaderProps {
  title: string;
  onIconPress?: () => void;
  rightIcon?: ImageSourcePropType;
}
export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  title,
  onIconPress,
  rightIcon,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[COLORS.primary, COLORS.secondary]}
      style={[styles.headerContainer, {paddingTop: insets.top}]}>
      {onIconPress && rightIcon && (
        <TouchableOpacity style={styles.iconContainer} onPress={onIconPress}>
          <Image source={rightIcon} resizeMode="contain" style={styles.icon} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 92, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    ...FONTS.H6,
    fontWeight: '600',
  },

  icon: {
    height: 24,
    width: 24,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    bottom: 8,
  },
});
