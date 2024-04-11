import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import TransactionItem from '../molecules/transaction.item.component';
import {icons, images} from '../../app/constants/index';
import {COLORS, FONTS} from '../theme/common.theme';
// Make sure the import path is correct

export interface Transaction {
  id: string;
  logo: ImageSourcePropType; // Change 'any' to 'ImageSourcePropType' if using local images
  merchant: string;
  amount: number;
  points: number;
  date: string;
}

interface RecentTransactionsPros {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsPros> = ({
  transactions,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent Transactions</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('View All pressed')}>
          <Text style={styles.buttonText}>View All </Text>
          <Image source={icons.rightArrow} style={styles.arrow} />
        </TouchableOpacity>
      </View>
      <View>
        {transactions.map(item => (
          <TransactionItem
            key={item.id}
            merchantLogo={item.logo}
            merchantName={item.merchant}
            amount={item.amount}
            rewardPoints={item.points}
            transactionDate={item.date}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.grey100,
  },
  title: {
    ...FONTS.P2,
    color: COLORS.black,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
  },
  buttonText: {
    ...FONTS.P2,
    color: COLORS.black,
    marginRight: 4,
  },
});

export default RecentTransactions;
