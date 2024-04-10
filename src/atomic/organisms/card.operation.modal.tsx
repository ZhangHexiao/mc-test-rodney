import {images, icons} from '../../app/constants/index';
import {SIZES, FONTS, COLORS} from '../theme/common.theme';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import ProgressBar from '../molecules/progress.bar';
import PaymentInfo from '../molecules/payment.info.component';
import RecentTransactions from '../molecules/transaction.list';

const drawerFullHeight = SIZES.height * 0.75;

interface CarOperationModalProps {
  isOpen: boolean;
  toggleCardModal: () => void;
  navigateToControls: () => void;
}

const CarOperationModal: React.FC<CarOperationModalProps> = ({
  isOpen,
  toggleCardModal,
  navigateToControls,
}) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isOpen ? 0 : drawerFullHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOpen, SIZES.height]);

  return (
    <Animated.View style={[styles.drawer, {height: animatedHeight}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.operationIconsRow}>
            <View style={styles.operationIconsContainer}>
              <TouchableOpacity onPress={navigateToControls}>
                <Image
                  style={styles.operationIcon}
                  source={icons.cardControl}
                  resizeMode="contain"></Image>
                <Text style={styles.iconText}>Controls</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.operationIconsContainer}>
              <Image
                style={styles.operationIcon}
                source={icons.cardLock}
                resizeMode="contain"></Image>
              <Text style={styles.iconText}>Lock Card</Text>
            </View>
            <View style={styles.operationIconsContainer}>
              <Image
                style={styles.operationIcon}
                source={icons.cardDetail}
                resizeMode="contain"></Image>
              <Text style={styles.iconText}>Card Details</Text>
            </View>
          </View>
          <View style={styles.section}>
            <ProgressBar currentBalance={1000} totalCreditLimit={10000} />
            <View style={styles.creditRow}></View>
          </View>
          <View style={styles.section}>
            <PaymentInfo
              statementBalance={600}
              minimumPayment={60}
              dueInDays={5}
              onMakePayment={() => {}}
            />
          </View>
          <RecentTransactions />
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
    backgroundColor: COLORS.superLight,
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  // ================
  operationIconsRow: {
    flexDirection: 'row',
    padding: 32,
    backgroundColor: COLORS.white,
  },

  operationIconsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  operationIcon: {
    height: 52,
    width: 52,
    margin: 8,
  },
  iconText: {
    ...FONTS.P2,
    color: COLORS.black,
    textAlign: 'center',
  },
  // ================
  section: {
    flex: 1,
    width: '100%',
    marginTop: 16,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  creditRow: {
    marginVertical: 8,
    alignItems: 'center',
    width: '100%',
  },
});

export default CarOperationModal;
