import {
  View,
  Text,
  Dimensions,
  Platform,
  Image,
  Modal,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {images, icons} from '../../constants/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, SIZES} from '../../../atomic/theme/common.theme';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/core';
import HomeTabScreen from './home.tab.screen';
import {Button} from '../../../atomic/atoms/button/button.component';
import {useEffect, useRef, useState} from 'react';

export const CarOperationModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const animatedHeight = useRef(new Animated.Value(SIZES.height * 0.7)).current;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    Animated.timing(animatedHeight, {
      toValue: isOpen ? SIZES.height * 0.7 : SIZES.height * 0.18,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    toggleDrawer();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.drawer,
          {
            bottom: 0,
            height: animatedHeight,
            // transform: [{translateY: animatedPosition}],
          },
        ]}>
        <Text>Drag handle or content</Text>
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={toggleDrawer}>
        <Text>{isOpen ? 'Close' : 'Open'} Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    // width: SIZES.width,
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 100,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.gray,
  },
  button: {
    width: 200,
    padding: 10,
    backgroundColor: 'blue',
  },
});
export default CarOperationModal;
