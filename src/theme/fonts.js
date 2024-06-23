import {Platform} from 'react-native';
import Metrics from './metrics';
import Colors from './colors';

const Size = {
  font_12: Metrics.screenWidth * (12 / 375),
  font_14: Metrics.screenWidth * (14 / 375),
  font_16: Metrics.screenWidth * (16 / 375),
  font_20: Metrics.screenWidth * (20 / 375),
  font_24: Metrics.screenWidth * (24 / 375),
};

const Fonts = {
  REGULAR: 'Satoshi-Regular',
  BOLD: 'Satoshi-Bold',
  LIGHT: 'Satoshi-Light',
  ITALIC: 'Satoshi-Italic',
  MEDIUM: 'Satoshi-Medium',

  BOLD_ITALIC: 'Satoshi-BoldItalic',
  MEDIUM_ITALIC: 'Satoshi-MediumItalic',
};

const Weight = {
  full: '900',
  semi: Platform.OS === 'ios' ? '600' : '700',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

export {Size, Weight, Colors, Fonts};
