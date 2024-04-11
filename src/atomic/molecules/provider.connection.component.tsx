import React from 'react';
import {View, StyleSheet, ImageSourcePropType, Image} from 'react-native';
import {icons} from '../../app/constants/index';
import {Button} from '../atoms/button.component';
import {COLORS, SIZES} from '../../atomic/theme/common.theme';

interface ProviderConnectionProps {
  logo: ImageSourcePropType; // Change 'any' to 'ImageSourcePropType' if using local images
  isConnected: boolean;
  onPressConnect: () => void;
}

const ProviderConnection: React.FC<ProviderConnectionProps> = ({
  logo,
  isConnected,
  onPressConnect,
}) => {
  return (
    <View
      style={{
        ...styles.providerBox,
        ...(isConnected ? styles.providerBoxBorder : styles.providerBoxShadow),
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={logo}
          resizeMode="contain"></Image>
      </View>
      {isConnected ? (
        <Image
          style={styles.checkIconStyle}
          source={icons.checkMark}
          resizeMode="contain"></Image>
      ) : (
        <></>
      )}
      {isConnected ? (
        <Button title="Connect" small filled onPress={onPressConnect} />
      ) : (
        <Button title="Connect" small onPress={onPressConnect} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  providerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
    marginHorizontal: 12,
  },

  providerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    paddingVertical: 16,
    width: (SIZES.width - 24) / 2 - 16,
  },

  providerBoxShadow: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2.5,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: COLORS.gray,
  },

  imageContainer: {
    marginHorizontal: 36,
    marginBottom: 12,
  },

  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    padding: 30,
    borderRadius: (SIZES.width - 24) / 2,
  },

  checkIconStyle: {
    width: 20,
    height: 20,
    aspectRatio: 1,
    position: 'absolute',
    top: 5,
    right: 5,
  },

  providerBoxBorder: {
    borderWidth: 3,
    borderRadius: 8,
    borderColor: COLORS.primary,
  },
});

export default ProviderConnection;
