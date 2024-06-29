import {Fonts, Size, Colors} from '@src/theme/fonts.js';
import metrics from '@src/theme/metrics';
import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    display: 'flex-1',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
  },
  formContainer: {
    height: '100%',
    display: 'flex',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(20),
  },
  logo: {
    height: scale(40),
    width: scale(40),
  },
  logoText: {
    color: Colors.COLOR_7,
    fontSize: Size.font_28,
    marginLeft: scale(8),
    fontFamily: Fonts.BOLD,
  },
  infocontainer: {
    // height: '70%',
  },
  welcomeContainer: {
    flexDirection: 'row',
    maxHeight: scale(48),
    display: 'flex-1',
    marginTop: scale(60),
  },
  welcomeTextPrimary: {
    fontSize: Size.font_24,
    color: Colors.COLOR_7,
    fontFamily: Fonts.BOLD,
  },
  welcomeTextSecondary: {
    fontSize: Size.font_24,
    color: Colors.BLACK,
    fontFamily: Fonts.BOLD,
  },
  description: {
    color: Colors.COLOR_8,
    fontFamily: Fonts.REGULAR,
    fontSize: Size.font_14,
    lineHeight: scale(20),
    marginTop: scale(20),
  },
  inputLabel: {
    fontSize: Size.font_14,
    color: Colors.COLOR_8,
    fontFamily: Fonts.BOLD,
    marginTop: scale(20),
  },
  inputContainer: {
    marginTop: scale(8),
  },
  input: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    height: scale(50),
    borderRadius: 14,
    fontSize: Size.font_14,
    marginTop: scale(8),
    paddingHorizontal: scale(16),
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
  errorText: {
    color: Colors.RED,
    fontFamily: Fonts.REGULAR,
    marginTop: scale(4),
  },
  passwordInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.GRAY,
    height: scale(50),
    marginTop: scale(8),
    borderRadius: scale(14),
    marginTop: scale(8),
  },
  passwordInput: {
    flex: 5 / 6,
    paddingHorizontal: scale(16),
    color: Colors.BLACK,
    fontSize: Size.font_14,
    fontFamily: Fonts.MEDIUM,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  passwordVisibilityToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 / 6,
  },
  forgotPasswordText: {
    color: Colors.BLACK,
    fontSize: Size.font_14,
    textAlign: 'right',
    fontFamily: Fonts.BOLD,
    marginTop: scale(20),
  },
  loginButton: {
    backgroundColor: Colors.COLOR_7,
    paddingVertical: scale(10),
    borderRadius: scale(24),
    marginTop: scale(24),
  },
  loginButtonText: {
    color: Colors.WHITE,
    fontSize: Size.font_18,
    textAlign: 'center',
    fontFamily: Fonts.BOLD,
  },
});
