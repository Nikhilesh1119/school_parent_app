import {Platform} from 'react-native';
import Metrics from './metrics';
import Colors from './colors';

const Size = {
  font_12: Metrics.screenWidth * (12 / 375),
  font_14: Metrics.screenWidth * (14 / 375),
  font_16: Metrics.screenWidth * (16 / 375),
  font_20: Metrics.screenWidth * (20 / 375),
  font_24: Metrics.screenWidth * (24 / 375),
<<<<<<< HEAD
=======
  font_25: Metrics.screenWidth * (25 / 375),
  font_26: Metrics.screenWidth * (26 / 375),
  font_27: Metrics.screenWidth * (27 / 375),
  font_28: Metrics.screenWidth * (28 / 375),
  font_29: Metrics.screenWidth * (29 / 375),
  font_30: Metrics.screenWidth * (30 / 375),
  font_40: Metrics.screenWidth * (40 / 375),
>>>>>>> 02de7edc2b1fe7b2455736c07fe33f8d41d076b3
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
