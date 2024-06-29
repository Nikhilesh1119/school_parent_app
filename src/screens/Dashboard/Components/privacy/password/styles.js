import {StyleSheet} from 'react-native';
import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_6,
  },
  scrollView: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(16),
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scale(20),
  },
  image: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
    top: scale(-36),
  },
  sectionTitle: {
    flex: 1,
  },
  titleText: {
    fontSize: Size.font_20,
    fontFamily: Fonts.BOLD,
    marginLeft: scale(45),
    color: Colors.BLACK,
  },
  subtitleText: {
    fontSize: Size.font_20,
    fontFamily: Fonts.BOLD,
    marginTop: scale(60),
    marginLeft: scale(30),
    color: Colors.BLACK,
  },
  inputContainer: {
    marginBottom: scale(20),
  },
  label: {
    fontSize: Size.font_18,
    marginTop: scale(10),
    marginBottom: scale(-10),
    fontFamily: Fonts.BOLD,
    color: Colors.BLACK,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.BORDER,
    borderRadius: scale(10),
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    fontSize: Size.font_16,
  },
  saveButton: {
    borderRadius: scale(40),
    backgroundColor: Colors.COLOR_7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(20),
    marginTop: scale(20),
  },
  saveButtonText: {
    color: Colors.CREAM,
    fontSize: Size.font_18,
    fontFamily: Fonts.BOLD,
  },
});
