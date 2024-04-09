import {COLORS, FONTS} from '../../theme/common.theme';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ProgressBarProps {
  currentBalance: number;
  totalCreditLimit: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentBalance,
  totalCreditLimit,
}) => {
  const progress = currentBalance / totalCreditLimit; // Calculate the usage progress

  return (
    <View style={styles.card}>
      <View style={styles.balanceRow}>
        <Text style={styles.balanceNumber}>${currentBalance.toFixed(2)}</Text>
        <Text style={styles.balanceText}>Current Balance</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, {width: `${progress * 100}%`}]} />
      </View>
      <View style={styles.creditDetails}>
        <Text style={styles.label}>Available Credit:</Text>
        <Text style={styles.label}>
          ${(totalCreditLimit - currentBalance).toFixed(2)}
        </Text>
      </View>
      <View style={styles.creditDetails}>
        <Text style={styles.label}>Total Credit Limit:</Text>
        <Text style={styles.label}>${totalCreditLimit.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    flex: 1,
  },
  balance: {
    ...FONTS.H2,
    marginBottom: 4,
  },
  label: {
    ...FONTS.P2,
    color: COLORS.black,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: COLORS.grey100,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.accent,
  },
  creditDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },

  balanceRow: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 4,
  },

  balanceNumber: {
    ...FONTS.H3,
    fontWeight: '600',
  },
  balanceText: {
    ...FONTS.P2,
    color: COLORS.grey800,
  },
});

export default ProgressBar;
