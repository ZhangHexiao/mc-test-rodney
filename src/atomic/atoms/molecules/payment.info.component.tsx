import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../theme/common.theme';
import {Button} from '../button/button.component';

interface PaymentInfoProps {
  statementBalance: number;
  minimumPayment: number;
  dueInDays: number;
  onMakePayment: () => void; // Callback for when the payment button is pressed
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  statementBalance,
  minimumPayment,
  dueInDays,
  onMakePayment,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.dueText}>Payment Due in {dueInDays} Days</Text>

      <View style={styles.amountsContainer}>
        <View style={styles.amountContainer}>
          <Text style={styles.label}>Statement Balance</Text>
          <Text style={styles.amount}>${statementBalance.toFixed(2)}</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.amountContainer}>
          <Text style={styles.label}>Minimum Payment</Text>
          <Text style={styles.amount}>${minimumPayment.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button title="Make a payment" onPress={onMakePayment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 20,
  },
  dueText: {
    textAlign: 'center',
    color: COLORS.primary,
    ...FONTS.H6,
    fontWeight: '600',
    marginBottom: 16,
  },
  amountsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 36,
  },
  amountContainer: {
    alignItems: 'center',
  },
  label: {
    ...FONTS.P2,
    color: COLORS.grey800,
    marginBottom: 8,
  },
  amount: {
    ...FONTS.H5,
    fontWeight: '600',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: COLORS.grey200,
    marginHorizontal: 12,
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default PaymentInfo;
