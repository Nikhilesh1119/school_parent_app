import {StyleSheet} from 'react-native';

import colors from '@src/theme/colors';
import {Size, Fonts} from '@src/theme/fonts';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(30),
    paddingHorizontal: scale(16),
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  sectionTitle: {
    fontSize: Size.font_24,
    fontFamily: Fonts.BOLD,
    marginLeft: scale(30),
    marginBottom: scale(20),
    color: colors.INDIGO,
  },
  image: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
    marginTop: scale(-15),
  },
  inputContainer: {
    marginBottom: scale(20),
  },
  label: {
    fontSize: Size.font_20,
    fontFamily: Fonts.BOLD,
    marginBottom: scale(8),
    color: colors.INDIGO,
  },
  description: {
    fontSize: Size.font_16,
    color: colors.DARK_BLUE,
    marginBottom: scale(15),
    top: scale(8),
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(0.5),
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(10),
    backgroundColor: colors.WHITE,
  },
  input: {
    flex: 1,
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    fontSize: Size.fonts_16,
    borderWidth: scale(0.5),
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(10),
    backgroundColor: colors.WHITE,
  },
  inputIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(14),
    borderColor: colors.MODERATE_PURPLE,
    borderWidth: scale(1),
    backgroundColor: colors.WHITE,
    paddingVertical: scale(18),
    marginBottom: scale(15),
  },
  updateButtonText: {
    color: colors.GRAY,
    fontFamily: Fonts.BOLD,
    paddingLeft: scale(10),
    flex: 1,
    fontSize: Size.fonts_24,
  },
  buttonIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
  },
  saveButton: {
    borderRadius: 40,
    backgroundColor: colors.PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(18),
  },
  saveButtonText: {
    color: colors.WHITE,
    fontSize: Size.fonts_16,
    fontFamily: Fonts.BOLD,
  },
});
