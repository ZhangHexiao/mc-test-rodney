import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {COLORS, FONTS} from '../theme/common.theme';
import LinearGradient from 'react-native-linear-gradient';

export const Button = (props: any) => {
  const textColor = props.filled
    ? COLORS.white || props.textColor
    : props.textColor || COLORS.primary;
  const backgroundColor = props.backgroundColor
    ? [props.backgroundColor, props.backgroundColor]
    : [COLORS.primary, COLORS.secondary];
  const isLoading = props.isLoading || false;
  const isSmallSize = props.small || false;
  const isFilled = props.filled || false;
  const isDiabled = props.disable || false;
  return (
    <LinearGradient
      colors={isFilled ? backgroundColor : [COLORS.white, COLORS.white]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        ...styles.btnContainer,
        ...props.style,
        borderWidth: isFilled ? 0 : 2,
        height: isSmallSize ? 38 : 48,
        width: isSmallSize ? '70%' : '90%',
      }}>
      <TouchableOpacity
        style={styles.btn}
        onPress={props.onPress}
        disabled={isDiabled}>
        {isLoading && isLoading == true ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <Text
            style={
              isSmallSize
                ? {...FONTS.P2, fontWeight: '700', color: textColor}
                : {...FONTS.H6, fontWeight: '600', color: textColor}
            }>
            {props.title}
          </Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    borderColor: COLORS.primary,
    borderRadius: 4,
  },
});
