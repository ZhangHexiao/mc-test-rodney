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
import RecentTransactions, {Transaction} from '../molecules/transaction.list';
import {CardInfo} from '@app/scenes/tabs/home.tab.screen';

const drawerFullHeight = SIZES.height * 0.7;

interface CarOperationModalProps {
  isOpen: boolean;
  toggleCardModal: () => void;
  navigateToControls: () => void;
  lockCard: () => void;
  cardInfo: CardInfo;
}
const CarOperationModal: React.FC<CarOperationModalProps> = ({
  isOpen,
  toggleCardModal,
  navigateToControls,
  lockCard,
  cardInfo,
}) => {
  const animatedHeight = useRef(new Animated.Value(drawerFullHeight)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isOpen ? drawerFullHeight : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isOpen, SIZES.height]);

  return (
    <Animated.View style={[styles.drawer, {height: animatedHeight}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={styles.operationIconsRow}>
            <TouchableOpacity
              style={styles.operationIconsContainer}
              onPress={navigateToControls}>
              <Image
                style={styles.operationIcon}
                source={icons.cardControl}
                resizeMode="contain"></Image>
              <Text style={styles.iconText}>Controls</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.operationIconsContainer}
              onPress={lockCard}>
              <Image
                style={styles.operationIcon}
                source={icons.cardLock}
                resizeMode="contain"></Image>
              <Text style={styles.iconText}>Lock Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.operationIconsContainer}
              onPress={toggleCardModal}>
              <Image
                style={styles.operationIcon}
                source={icons.cardDetail}
                resizeMode="contain"></Image>
              <Text style={styles.iconText}>Card Details</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <ProgressBar {...cardInfo.creditStatus} />
            <View style={styles.creditRow}></View>
          </View>
          <View style={styles.section}>
            <PaymentInfo {...cardInfo.paymentInfo} />
          </View>
          <RecentTransactions transactions={cardInfo.transaction} />
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
  },

  creditRow: {
    marginVertical: 8,
    alignItems: 'center',
    width: '100%',
  },
});

export default CarOperationModal;
