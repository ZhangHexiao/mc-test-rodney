import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import TransactionItem from '../atoms/transaction.item.component';
import {icons, images} from '../../app/constants/index';
import {COLORS, FONTS} from '../theme/common.theme';
// Make sure the import path is correct

interface Transaction {
  id: string;
  logo: ImageSourcePropType; // Change 'any' to 'ImageSourcePropType' if using local images
  merchant: string;
  amount: number;
  points: number;
  date: string;
}

const recentTransactionsData: Transaction[] = [
  {
    id: '1',
    logo: images.starbucksAvatar,
    merchant: 'Starbucks',
    amount: 5.43,
    points: 5,
    date: '2021-10-12 08:23AM',
  },
  {
    id: '2',
    logo: images.amazonAvatar,
    merchant: 'Amazon',
    amount: 125.3,
    points: 125,
    date: '2021-10-12 08:23AM',
  },
  {
    id: '3',
    logo: images.ddAvatar,
    merchant: 'Dunkin Donuts',
    amount: 10.84,
    points: 10,
    date: '2021-10-12 08:23AM',
  },
];

const RecentTransactions: React.FC = () => {
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
        {recentTransactionsData.map(item => (
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
