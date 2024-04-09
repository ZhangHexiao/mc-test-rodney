import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const drawerFullHeight = screenHeight * 0.75;
const drawerPartialHeight = screenHeight * 0.25;

interface CarOperationModalProps {
  isOpen: boolean;
  toggleCardModal: () => void;
}

const CarOperationModal: React.FC<CarOperationModalProps> = ({
  isOpen,
  toggleCardModal,
}) => {
  const animatedHeight = useRef(
    new Animated.Value(drawerPartialHeight),
  ).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isOpen ? drawerPartialHeight : drawerFullHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOpen, screenHeight]);

  return (
    <Animated.View style={[styles.drawer, {height: animatedHeight}]}>
      <ScrollView
        style={styles.drawerContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {Array.from({length: 20}, (_, i) => (
            <Text key={i} style={styles.item}>
              Item {i + 1}
            </Text>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    paddingBottom: 80,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  drawerContent: {
    flex: 1,
  },
  toggleButton: {
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});

export default CarOperationModal;
