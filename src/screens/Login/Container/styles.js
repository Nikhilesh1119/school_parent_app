import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import {StyleSheet} from 'react-native';
import {colors} from '@src/theme/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50,
      },
      swipeContainer: {
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
      },
      swipeText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      header: {
        position: 'absolute',
        top: 50,
        width: '100%',
        alignItems: 'center',
      },
      logoText:{
        color: 'white',
        fontSize: Size.font_40,
        fontWeight: Weight.full,
        top:10,
        
  
      },
  
      headerText: {
        color: 'white',
        fontSize: Size.font_24,
        fontWeight: Weight.low,
        top:10
      },
      subHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'semibold',
        top:8
      },

})
export default styles;