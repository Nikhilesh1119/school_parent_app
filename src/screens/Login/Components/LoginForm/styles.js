import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import {StyleSheet} from 'react-native';
import colors from '@src/theme/colors';

const styles = StyleSheet.create({
    container: {
        minHeight: '100%',
      },
      innerContainer: {
        paddingHorizontal: 20,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      },
      formContainer: {
        paddingHorizontal: 15,
        height: '100%',
      },
      headerContainer: {
        flexDirection: 'row',
        maxHeight: 48,
        alignItems: 'center',
        marginTop:10,
        marginBottom:20
      },
      welcomeText: {
        fontSize: 24,
        color: '#F97316', // Equivalent to 'text-orange-600'
        fontFamily: Fonts.BOLD,
        
      },
      loginText: {
        fontSize: 24,
        color: 'black',
        fontFamily: Fonts.BOLD
  
      },
      label: {
        fontSize: 18,
        color: '#7b7c7b',
        marginBottom:10
      },
      input: {
        borderColor: '#e5e7e6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
      },
      errorText: {
        color: '#DC2626',
        marginBottom:5 // Equivalent to 'text-red-600'
      },
      passwordContainer: {
        borderColor: '#e5e7e6',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        
      },
      passwordInput: {
        borderRadius: 10,
        width: '83.33%', // Equivalent to 'w-5/6'
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
      },
      iconContainer: {
        height: 48,
        width: '16.67%', // Equivalent to 'w-1/6'
        justifyContent: 'center',
        alignItems: 'center',
      },
      forgotPasswordText: {
        color: '#1F2937', // Equivalent to 'text-gray-900'
        textAlign: 'right',
      },
      submitButton: {
        marginTop: 48,
        backgroundColor: '#6B21A8', // Equivalent to 'bg-purple-700'
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
      },
      submitButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
      },
})