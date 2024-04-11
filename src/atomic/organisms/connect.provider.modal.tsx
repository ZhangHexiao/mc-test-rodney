import {icons} from '../../app/constants/index';
import {SIZES, FONTS, COLORS} from '../theme/common.theme';
import React, {useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Button} from '../atoms/button.component';
import {InputLabel} from '../atoms/input.label.component';
import {Input} from '../atoms/input.component';

export interface ConnectProviderModalProps {
  providerLogo: ImageSourcePropType;
  isOpen: boolean;
  colorThem: string;
  closeModal: () => void;
  connectProviderAction: () => Promise<void>;
  isLoading: boolean;
}

const ConnectProviderModal: React.FC<ConnectProviderModalProps> = ({
  providerLogo,
  isOpen,
  colorThem,
  closeModal,
  connectProviderAction,
  isLoading,
}) => {
  const inputChangedHandler = useCallback(
    (inputId: string, inputValue: string) => {},
    [],
  );
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View style={styles.modalContainer}>
        <View
          style={{
            ...styles.modal,
            borderTopWidth: 8,
            borderTopColor: colorThem,
          }}>
          <TouchableOpacity style={styles.closeIconStyle} onPress={closeModal}>
            <Image source={icons.closeMark} resizeMode="contain"></Image>
          </TouchableOpacity>
          <Image
            source={providerLogo}
            resizeMode="contain"
            style={styles.modalImage}
          />
          <Text style={styles.title}>Connect Spotify</Text>
          <View style={{margin: 16}}>
            <InputLabel title="User Name" />
            <Input
              id="userName"
              onInputChanged={inputChangedHandler}
              placeholder="user@gmail.com"
              placeholderTextColor={COLORS.black}
            />
            <InputLabel title="Password" />
            <Input
              id="userPassword"
              onInputChanged={inputChangedHandler}
              placeholder="••••••••••"
              placeholderTextColor={COLORS.black}
              secureTextEntry
            />
          </View>
          <Button
            title="Connect"
            filled
            onPress={connectProviderAction}
            backgroundColor={COLORS.black}
            style={styles.modalBtn}
            isLoading={isLoading}
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
  modal: {
    height: 526,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    padding: 16,
  },
  modalBtn: {
    width: '100%',
    backgroundColor: COLORS.black,
    position: 'absolute',
    bottom: 24,
  },
  modalImage: {
    height: SIZES.width * 0.2,
    width: SIZES.width * 0.2,
    marginVertical: 22,
    borderRadius: (SIZES.width * 0.2) / 2,
  },
  title: {
    ...FONTS.H5,
    fontWeight: '600',
    color: COLORS.black,
    textAlign: 'center',
    marginHorizontal: 24,
    marginVertical: 24,
  },
  subTitle: {
    ...FONTS.H6,
    textAlign: 'center',
    marginHorizontal: 37,
    fontWeight: '500',
    color: COLORS.grey800,
  },

  closeIconStyle: {
    width: 10,
    height: 10,
    aspectRatio: 1,
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ConnectProviderModal;
