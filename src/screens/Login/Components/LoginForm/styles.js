import {Fonts, Size, Colors} from '@src/theme/fonts.js';
import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import colors from '@src/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:colors.GRAY_WHITE,
    borderTopLeftRadius: scale(50),
    borderTopRightRadius: scale(50),
    paddingHorizontal: scale(0), // Added padding for wider appearance
    paddingVertical: scale(16),
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    
  },
  formContainer: {
    flex:1,
    height: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: scale(16),
    marginLeft:scale(4),
    

     // Added padding for wider appearance
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(32), // Added margin for better spacing
    marginTop:scale(20),

  },
  logo: {
    height: scale(70),
    width: scale(70),
    
  },
  logoText: {
    color: Colors.COLOR_7,
    fontSize: Size.font_26,
    marginLeft: scale(8),
    fontFamily: Fonts.BOLD,
  },
  infocontainer: {
    height: '70%',
    justifyContent: 'space-evenly',
    marginBottom:scale(32)
  },
  welcomeContainer: {
    flexDirection: 'row',
    maxHeight: scale(48),
    marginTop: scale(-4),
    marginLeft:scale(-20),
    marginBottom:scale(16)
  
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
    marginTop: scale(-8),
    marginLeft:scale(-20),
    marginBottom:scale(16)
  },
  inputLabel: {
    fontSize: Size.font_14,
    color: Colors.COLOR_8,
    fontFamily: Fonts.BOLD,
    marginTop: scale(0),
    marginLeft:scale(-20)
   
  },
  inputContainer: {
    marginTop: scale(8),
    
  },
  input: {
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: scale(1),
    height: scale(40),
    borderRadius: scale(10),
    fontSize: Size.font_14,
    marginTop: scale(8),
    paddingHorizontal: scale(8),
    color: Colors.BLACK,
    fontFamily: Fonts.MEDIUM,
    marginLeft:scale(-20)
  },
  errorText: {
    color: Colors.RED,
    fontFamily: Fonts.REGULAR,
    marginTop: scale(4),
    marginLeft:scale(-20)
  },
  passwordInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    height: scale(40),
    marginTop: scale(8),
    borderRadius: scale(10),
    marginLeft:scale(-20),
    alignItems:'center'
  },
  passwordInput: {
    flex: 5 / 6,
    paddingHorizontal: scale(16),
    color: Colors.BLACK,
    fontSize: Size.font_14,
    fontFamily: Fonts.MEDIUM,
    marginLeft:scale(-10)
  },
  passwordVisibilityToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 / 6,
    marginLeft:scale(8)
  },
  forgotPasswordText: {
    color: Colors.BLACK,
    fontSize: Size.font_14,
    textAlign: 'right',
    fontFamily: Fonts.BOLD,
    marginTop: scale(-10),
  },
  loginButton: {
    backgroundColor: colors.PURPLE,
    paddingVertical: scale(10),
    borderRadius: scale(24),
    marginTop: scale(8),
    marginBottom:scale(25)
  },
  loginButtonText: {
    color: Colors.WHITE,
    fontSize: Size.font_18,
    textAlign: 'center',
    fontFamily: Fonts.BOLD,
  },
});
