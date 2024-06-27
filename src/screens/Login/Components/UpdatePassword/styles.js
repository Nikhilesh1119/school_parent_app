import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import colors from '@src/theme/colors';
import { scale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.WHITE,
      alignItems: "center",
      paddingHorizontal: scale(20),
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: scale(30),
    },
    logoContainer: {
      width: 40,
      height: 40,
      borderRadius: 10,
      backgroundColor: colors.PURPLE,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 8,
    },
    logoText: {
      color: colors.WHITE,
      fontSize: 24,
      fontFamily:Fonts.MEDIUM,
    },
    logoTitle: {
      color: colors.PURPLE,
      fontSize: 24,
      fontFamily:Fonts.BOLD
    },
    formContainer: {
      marginTop: scale(60),
      width: "100%",
    },
    formTitle: {
      fontSize: 24,
      fontFamily:Fonts.MEDIUM,
      color: colors.BLACK,
      marginBottom: 20,
    },
    inputGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 14,
      fontFamily:Fonts.MEDIUM,
      color: colors.BLACK,
      marginBottom: 16,
    },
    input: {
      borderColor: colors.GRAY,
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 12,
      paddingHorizontal: 16,
      fontSize: 14,
      color: colors.PURPLE,
    },
    button: {
      marginTop: 40,
      borderRadius: 40,
      backgroundColor: colors.PURPLE,
      alignItems: "center",
      paddingVertical: 16,
    },
    buttonText: {
      color: colors.WHITE,
      fontSize: 18,
      fontFamily: Fonts.BOLD,
    },
    footer: {
      marginTop: 60,
      alignItems: "center",
      width: "100%",
    },
  
  });
export default styles;  