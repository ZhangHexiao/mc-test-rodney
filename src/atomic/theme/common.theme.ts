import {DefaultTheme} from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  primary: '#E35205',
  secondary: '#F98E20',
  black: '#333333',
  white: '#FFFFFE',
  gray: '#dcdee0',
  notSelectedGray: '#ADADAD',
  disalbeGray: '#D6D6D6',
  sportifyGreen: '#1DB954',
  secondaryBlack: '#020614',
  superLight: '#F8F8F8',
  // tertiary: '#D6CDFE',
  // blue: '#150B3D',

  // secondaryWhite: '#F7F7F7',
  // tertiaryWhite: '#F2F2F2',

  // secondaryGray: '#808080',
  // red: '#FF0000',
  // green: '#00BE00',
  // tansparentPrimary: 'rgba(0, 154, 118, .15)',
};

export const SIZES = {
  // Global SIZES
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  padding3: 16,

  // FONTS Sizes
  // largeTitle: 50,
  h1: 26,
  h2: 22,
  h3: 16,
  h4: 14,
  // body1: 30,
  // body2: 20,
  // body3: 16,
  // body4: 14,

  width,
  height,
};

// color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',

export const FONTS = {
  // largeTitle: {fontFamily: 'black', fontSize: SIZES.largeTitle, lineHeight: 55},
  h1: {fontSize: SIZES.h1, lineHeight: 32},
  h2: {fontSize: SIZES.h2, lineHeight: 28},
  h3: {fontSize: SIZES.h3, lineHeight: 20},
  h4: {fontSize: SIZES.h4, lineHeight: 18},
  header: {fontSize: SIZES.h3, lineHeight: 20},

  // body1: {fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36},
  // body2: {fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30},
  // body3: {fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22},
  // body4: {fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20},
};

export const CommonTheme: DefaultTheme = {
  COLORS,
  SIZES,
  FONTS,
};
