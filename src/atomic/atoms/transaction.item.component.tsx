import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import {COLORS, FONTS} from '../theme/common.theme';

interface TransactionItemProps {
  merchantLogo: ImageSourcePropType; // Replace with ImageSourcePropType for TypeScript if using a local image
  merchantName: string;
  transactionDate: string;
  amount: number;
  rewardPoints: number;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  merchantLogo,
  merchantName,
  transactionDate,
  amount,
  rewardPoints,
}) => {
  return (
    <View style={styles.container}>
      <Image source={merchantLogo} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.merchantName}>{merchantName}</Text>
        <Text style={styles.transactionDate}>{transactionDate}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        <Text style={styles.rewardPoints}>+{rewardPoints} pts</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  merchantName: {
    ...FONTS.P1,
    color: COLORS.black,
  },
  transactionDate: {
    color: COLORS.grey400,
    ...FONTS.P2,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    ...FONTS.P1,
    color: COLORS.black,
  },
  rewardPoints: {
    color: COLORS.links,
    ...FONTS.P2,
  },
});

export default TransactionItem;
