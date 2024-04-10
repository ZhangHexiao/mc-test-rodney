import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../theme/common.theme';

interface CardProps {
  onPress: () => void;
  cardNumber: String;
  cardType: ImageSourcePropType;
  containerStyle?: object;
}
const Card: React.FC<CardProps> = ({
  onPress,
  cardNumber,
  cardType,
  containerStyle,
}) => {
  return (
    <View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{cardNumber}</Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}>
        <Image
          source={cardType}
          resizeMode="contain"
          style={styles.cardStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 160,
    marginRight: 12,
  },

  subTitleContainer: {
    marginHorizontal: 48,
    marginVertical: 24,
    alignItems: 'center',
  },

  subTitle: {
    ...FONTS.P1,
    color: COLORS.black,
    textAlign: 'center',
    fontWeight: '500',
  },

  cardStyle: {
    height: '100%',
    width: '100%',
    zIndex: -999,
  },
});

export default Card;
