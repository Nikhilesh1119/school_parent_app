import {StyleSheet} from 'react-native';

import colors from '@src/theme/colors';
import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.COLOR_6,
    padding: scale(16),
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: scale(20),
  },
  backButton: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
  },
  headerText: {
    fontSize: Size.font_24,
    fontFamily: Fonts.BOLD,
    marginLeft: scale(80),
    marginBottom: scale(30),
    top: scale(14),
    color: colors.BLACK,
  },
  formGroup: {
    width: '100%',
    marginVertical: scale(16),
  },
  label: {
    marginBottom: scale(12),
    fontSize: Size.font_16,
    fontFamily: Fonts.BOLD,
    color: colors.BLACK,
  },
  input: {
    borderWidth: 0.5,
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(8),
    padding: scale(12),
    backgroundColor: colors.WHITE,
    fontSize: Size.font_16,
  },
  genderContainer: {
    borderWidth: 0.5,
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(8),
    backgroundColor: Colors.WHITE,
  },
  genderPicker: {
    height: scale(50),
    width: '100%',
    color: Colors.DARKGRAY,
  },
  updateButton: {
    backgroundColor: Colors.COLOR_7,
    borderRadius: scale(10),
    paddingVertical: scale(12),
    width:'100%',
    alignItems: 'center',
    marginTop: scale(20),
  },
  updateButtonText: {
    color: Colors.WHITE,
    fontSize: Size.font_16,
    fontWeight: 'bold',
  },
});
