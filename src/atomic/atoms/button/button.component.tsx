import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../theme/common.theme';
import LinearGradient from 'react-native-linear-gradient';

export const Button = (props: any) => {
  const textColor = props.filled
    ? COLORS.white || props.textColor
    : props.textColor || COLORS.primary;
  const backgroundColor = props.backgroundColor
    ? [props.backgroundColor, props.backgroundColor]
    : ['#E35205', '#F98E20'];
  const isLoading = props.isLoading || false;
  const isSmallSize = props.small || false;
  const isFilled = props.filled || false;
  return (
    <LinearGradient
      colors={isFilled ? backgroundColor : [COLORS.white, COLORS.white]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        ...styles.btn,
        ...props.style,
        borderWidth: isFilled ? 0 : 2,
        height: isSmallSize ? 38 : 48,
        width: isSmallSize ? '70%' : '90%',
      }}>
      <TouchableOpacity onPress={props.onPress}>
        {isLoading && isLoading == true ? (
          <ActivityIndicator size="small" color={COLORS.white} />
        ) : (
          <Text style={{...FONTS.h3, ...{color: textColor}}}>
            {props.title}
          </Text>
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    borderColor: COLORS.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
