import {DefaultTheme} from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  gray: '#dcdee0',
  sportifyGreen: '#1DB954',
  // ========
  white: '#FFFFFE',
  primary: '#E35205',
  secondary: '#F98E20',
  black: '#333333',
  grey800: '#5C5C5C',
  grey600: '',
  grey400: '#ADADAD',
  grey200: '#D6D6D6',
  grey100: '',
  superLight: '#F8F8F8',
  accent: '#7A9A02',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 30,
  padding: 8,
  padding2: 12,
  padding3: 16,
  width,
  height,
};

export const FONTS = {
  H1: {fontSize: 36, lineHeight: 46},
  H2: {fontSize: 32, lineHeight: 40},
  H3: {fontSize: 30, lineHeight: 36},
  H4: {fontSize: 26, lineHeight: 32},
  H5: {fontSize: 22, lineHeight: 28},
  H6: {fontSize: 18, lineHeight: 24},
  P1: {fontSize: 16, lineHeight: 20},
  P2: {fontSize: 14, lineHeight: 18},
  Label: {fontSize: 12, lineHeight: 16},
};

export const CommonTheme: DefaultTheme = {
  COLORS,
  SIZES,
  FONTS,
};
