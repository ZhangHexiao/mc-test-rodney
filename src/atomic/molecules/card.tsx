import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../theme/common.theme';
import {CardInfo} from '../../app/scenes/tabs/home.tab.screen';
import {icons} from '../../app/constants/index';

interface CardProps {
  onPressCard: () => void;
  containerStyle?: object;
  disablePress: boolean;
  cardInfo: CardInfo;
}
const Card: React.FC<CardProps> = ({
  onPressCard,
  containerStyle,
  disablePress,
  cardInfo,
}) => {
  return (
    <View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>{cardInfo.cardNumberDisplay}</Text>
      </View>
      <TouchableOpacity
        disabled={disablePress}
        onPress={onPressCard}
        style={{
          ...styles.container,
          ...containerStyle,
        }}>
        {cardInfo.isLocked && (
          <>
            <View style={styles.colorOverlay} />
            <View style={styles.overlayView}>
              <Image
                source={icons.lock}
                resizeMode="contain"
                style={styles.lockIcon}></Image>
              <Text style={styles.lockText}>
                You Card has been temperarily locked
              </Text>
            </View>
          </>
        )}
        <ImageBackground
          source={cardInfo.cardType}
          resizeMode="contain"
          style={styles.cardStyle}></ImageBackground>
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

  overlayView: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },

  colorOverlay: {
    position: 'absolute',
    top: 3,
    left: 5,
    right: 5,
    bottom: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', // Example: Orange color with 50% opacity
  },

  lockText: {
    ...FONTS.Label,
    color: COLORS.white,
    fontWeight: '700',
  },

  lockIcon: {
    width: 16,
    height: 20,
    marginBottom: 8,
    marginTop: 8,
  },
});

export default Card;
