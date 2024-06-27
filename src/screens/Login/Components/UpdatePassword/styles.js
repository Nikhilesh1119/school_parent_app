import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import colors from '@src/theme/colors';
import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: colors.WHITE,
//       alignItems: "center",
//       paddingHorizontal: scale(20),
//     },
//     header: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginTop: scale(30),
//     },
//     logoContainer: {
//       width: 40,
//       height: 40,
//       borderRadius: 10,
//       backgroundColor: colors.PURPLE,
//       justifyContent: "center",
//       alignItems: "center",
//       marginRight: 8,
//     },
//     logoText: {
//       color: colors.WHITE,
//       fontSize: 24,
//       fontFamily:Fonts.MEDIUM,
//     },
//     logoTitle: {
//       color: colors.PURPLE,
//       fontSize: 24,
//       fontFamily:Fonts.BOLD
//     },
//     formContainer: {
//       marginTop: scale(60),
//       width: "100%",
//     },
//     formTitle: {
//       fontSize: 24,
//       fontFamily:Fonts.MEDIUM,
//       color: colors.BLACK,
//       marginBottom: 20,
//     },
//     inputGroup: {
//       marginBottom: 20,
//     },
//     label: {
//       fontSize: 14,
//       fontFamily:Fonts.MEDIUM,
//       color: colors.BLACK,
//       marginBottom: 16,
//     },
//     input: {
//       borderColor: colors.GRAY,
//       borderWidth: 1,
//       borderRadius: 10,
//       paddingVertical: 12,
//       paddingHorizontal: 16,
//       fontSize: 14,
//       color: colors.PURPLE,
//     },
//     button: {
//       marginTop: 40,
//       borderRadius: 40,
//       backgroundColor: colors.PURPLE,
//       alignItems: "center",
//       paddingVertical: 16,
//     },
//     buttonText: {
//       color: colors.WHITE,
//       fontSize: 18,
//       fontFamily: Fonts.BOLD,
//     },
//     footer: {
//       marginTop: 60,
//       alignItems: "center",
//       width: "100%",
//     },

//   });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(30),
  },
  logoContainer: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(10),
    backgroundColor: colors.PURPLE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
  },
  logoText: {
    color: colors.WHITE,
    fontSize: Size.font_24,
    fontFamily: Fonts.MEDIUM,
  },
  logoTitle: {
    color: colors.PURPLE,
    fontSize: Size.font_24,
    fontFamily: Fonts.BOLD,
  },
  formContainer: {
    marginTop: scale(60),
    width: '100%',
  },
  formTitle: {
    fontSize: Size.font_24,
    fontFamily: Fonts.MEDIUM,
    color: colors.BLACK,
    marginBottom: scale(40),
    marginTop: scale(20),
  },
  inputGroup: {
    marginBottom: scale(20),
  },
  label: {
    fontSize: Size.font_14,
    fontFamily: Fonts.MEDIUM,
    color: colors.BLACK,
    marginBottom: scale(16),
  },
  input: {
    borderColor: colors.COLOR_12,
    borderWidth: 1,
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    fontSize: Size.font_14,
    color: colors.PURPLE,
    fontFamily: Fonts.REGULAR,
  },
  inputWithIcon: {
    borderColor: colors.COLOR_12,
    borderWidth: 1,
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    fontSize: Size.font_14,
    color: colors.PURPLE,
    fontFamily: Fonts.REGULAR,
    flex: 1,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordVisibilityToggle: {
    position: 'absolute',
    right: scale(16),
  },
  button: {
    marginTop: scale(40),
    borderRadius: scale(40),
    backgroundColor: colors.PURPLE,
    alignItems: 'center',
    paddingVertical: scale(16),
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: Size.font_18,
    fontFamily: Fonts.BOLD,
  },
  view1: {
    backgroundColor: '#4e2973',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '0 auto',
  },
  image1: {
    position: 'relative',
    marginTop: 89,
    width: '100%',
    aspectRatio: '1',
  },
  view2: {
    color: '#0F0616',
    fontVariantNumeric: 'lining-nums proportional-nums',
    fontFeatureSettings: "'dlig' on",
    letterSpacing: 0.24,
    alignSelf: 'center',
    marginTop: 4,
    font: '900 24px/83% Satoshi, sans-serif ',
  },
  div1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    position: 'relative',
    minHeight: 100,
    padding: 20,
  },
  section1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    position: 'relative',
    minHeight: 100,
    padding: 20,
    width: '100%',
    alignSelf: 'stretch',
    flexGrow: '1',
    boxSizing: 'border-box',
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default styles;
