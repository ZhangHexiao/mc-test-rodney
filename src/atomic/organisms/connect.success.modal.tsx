import {icons} from '../../app/constants/index';
import {SIZES, FONTS, COLORS} from '../theme/common.theme';
import React from 'react';
import {View, StyleSheet, Text, Image, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from '../atoms/button.component';

interface ConnectSuccessModalModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

const ConnectSuccessModal: React.FC<ConnectSuccessModalModalProps> = ({
  isOpen,
  toggleModal,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isOpen}>
      <View style={styles.modalContainer}>
        <View style={{...styles.modalSuccess}}>
          <LinearGradient
            colors={[COLORS.primary, COLORS.secondary]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.sucessCircleContainer}>
            <Image source={icons.successCircle} resizeMode="contain"></Image>
          </LinearGradient>
          <View style={{paddingTop: 24}}>
            <Text style={styles.successTitle}>All Set!</Text>
            <Text style={styles.subTitle}>Enjoy your digital journey</Text>
          </View>

          <Button
            title="View Dashboard"
            filled
            onPress={toggleModal}
            style={styles.modalSuccessBtn}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  successTitle: {
    ...FONTS.H4,
    color: COLORS.black,
    textAlign: 'center',
    marginHorizontal: 24,
    marginVertical: 24,
    fontWeight: '600',
  },
  subTitle: {
    ...FONTS.H6,
    textAlign: 'center',
    marginHorizontal: 37,
    fontWeight: '500',
    color: COLORS.grey800,
  },
  modalSuccess: {
    height: 388,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    alignItems: 'center',
    padding: 16,
  },
  modalSuccessBtn: {
    width: '100%',
    position: 'absolute',
    bottom: 24,
  },
  sucessCircleContainer: {
    height: 80,
    width: 80,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderColor: COLORS.white,
    borderWidth: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -40,
  },
});

export default ConnectSuccessModal;
