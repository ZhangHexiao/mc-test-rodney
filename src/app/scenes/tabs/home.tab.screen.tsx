import React, {
  FC,
  Fragment,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
} from 'react-native';

import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';

import {COLORS, FONTS, SIZES} from '../../../atomic/theme/common.theme';
import {images, icons} from '../../constants/index';
import {Button} from '../../../atomic/atoms/button.component';
import {InputLabel} from '../../../atomic/atoms/input.label.component';
import {Input} from '../../../atomic/atoms/input.component';
import LinearGradient from 'react-native-linear-gradient';
import Card from '../../../atomic/molecules/card';
import babelConfig from 'babel.config';
import {blue} from 'react-native-reanimated';
import CarOperationModal from '../../../atomic/organisms/card.operation.modal';
import {ScrollView} from 'react-native-gesture-handler';
import {HomeTabRoutes} from './tabs.stack';
import {Transaction} from '../../../atomic/molecules/transaction.list';
import {PaymentInfoProps} from '../../../atomic/molecules/payment.info.component';
import {creditStatue} from '../../../atomic/molecules/progress.bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
type ScreenProps = StackScreenProps<HomeTabRoutes, 'HomeTab'>;

export interface CardInfo {
  cardNumberDisplay: string;
  cardNumber: string;
  expDate: string;
  CVC: string;
  cardType: ImageSourcePropType;
  transaction: Transaction[];
  paymentInfo: PaymentInfoProps;
  creditStatus: creditStatue;
  isLocked: boolean;
}

let userCards: CardInfo[] = [
  {
    cardNumberDisplay: 'Mastercard •••• 1234',
    cardNumber: '5426123456781234',
    expDate: '09/25',
    CVC: '242',
    cardType: images.cardType1,
    transaction: [
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
    ],
    paymentInfo: {
      statementBalance: 600,
      minimumPayment: 60,
      dueInDays: 5,
      onMakePayment: () => {},
    },
    creditStatus: {
      currentBalance: 1000,
      totalCreditLimit: 10000,
    },
    isLocked: false,
  },
  {
    cardNumberDisplay: 'Mastercard •••• 4567',
    cardNumber: '5426123456784567',
    expDate: '09/29',
    CVC: '243',
    cardType: images.cardType1,
    transaction: [
      {
        id: '1',
        logo: images.starbucksAvatar,
        merchant: 'Starbucks',
        amount: 5.43,
        points: 5,
        date: '2021-10-12 08:23AM',
      },
    ],
    paymentInfo: {
      statementBalance: 900,
      minimumPayment: 90,
      dueInDays: 15,
      onMakePayment: () => {},
    },
    creditStatus: {
      currentBalance: 190,
      totalCreditLimit: 2000,
    },
    isLocked: false,
  },
];

const HomeTabScreen: React.FC<ScreenProps> = ({navigation}) => {
  let selectedCardIndex = 0;
  const [cardModalOpen, setCardModalOpen] = useState(true);
  const toggleCardModal = () => setCardModalOpen(!cardModalOpen);
  const [selectedCard, setSelectedCard] = useState<CardInfo>(
    userCards[selectedCardIndex],
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={styles.cardListContainer}>
            <FlatList
              horizontal
              data={userCards}
              scrollEnabled={!cardModalOpen}
              snapToAlignment="center"
              keyExtractor={(item, index) => index.toString()}
              contentInset={{
                left: (SIZES.width - 260) / 2 + 6,
                right: (SIZES.width - 260) / 2 + 6,
              }}
              contentOffset={{x: -(SIZES.width - 260) / 2, y: 0}}
              snapToInterval={260}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              renderItem={({index, item}) => (
                <Card
                  onPressCard={() => {
                    selectedCardIndex = index;
                    toggleCardModal();
                    setSelectedCard(userCards[index]);
                  }}
                  disablePress={cardModalOpen}
                  cardInfo={item}
                />
              )}
            />
          </View>
          <View style={styles.walletIconContainer}>
            <Image
              style={styles.walletStyle}
              source={images.appleWallet}
              resizeMode="contain"></Image>
          </View>
          <View style={styles.cardDetailContainer}>
            <Text style={styles.cardNumberTitle}>Card Number</Text>
            <Text style={styles.cardNumber}>{selectedCard.cardNumber}</Text>
          </View>
          <View style={styles.cardInfoContainer}>
            <View style={{flex: 2, paddingLeft: 48}}>
              <Text style={styles.cardNumberTitle}>Expiration Date</Text>
              <Text style={styles.cardNumber}>{selectedCard.expDate}</Text>
            </View>
            <View
              style={{
                flex: 1,
                paddingRight: 48,
                borderColor: COLORS.gray,
                borderLeftWidth: 1.5,
              }}>
              <Text style={styles.cardNumberTitle}>CVC</Text>
              <Text style={styles.cardNumber}>{selectedCard.CVC}</Text>
            </View>
          </View>
          <Button
            style={{marginVertical: 24}}
            title="Copy Card Number"
            onPress={() => {}}></Button>
        </View>
      </ScrollView>
      <CarOperationModal
        isOpen={cardModalOpen}
        toggleCardModal={toggleCardModal}
        cardInfo={selectedCard}
        navigateToControls={() => {
          navigation.navigate('CardControls');
        }}
        lockCard={() => {
          userCards[selectedCardIndex] = {
            ...userCards[selectedCardIndex],
            isLocked: !userCards[selectedCardIndex].isLocked,
          };
          setSelectedCard({...userCards[selectedCardIndex]});
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLORS.superLight,
  },

  cardListContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },

  walletIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 136,
  },

  walletStyle: {
    height: '100%',
  },

  cardDetailContainer: {
    width: 0.9 * SIZES.width,
    marginVertical: 32,
    paddingBottom: 24,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.gray,
  },

  cardNumberTitle: {
    ...FONTS.P1,
    color: COLORS.primary,
    textAlign: 'center',
  },

  cardNumber: {
    paddingTop: 8,
    ...FONTS.H5,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
  },

  cardInfoContainer: {
    flexDirection: 'row',
  },
});

export default HomeTabScreen;
