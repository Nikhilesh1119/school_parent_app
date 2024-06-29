import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: scale(0),
    left: scale(0),
    bottom: scale(0),
    right: scale(0),
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: scale(50),
  },
  swipeContainer: {
    alignItems: 'center',
    marginBottom: scale(20),
    padding: scale(10),
    borderRadius: 5,
  },
  swipeText: {
    alignSelf: 'center',
    color: Colors.WHITE,
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(20),
  },
  header: {
    position: 'absolute',
    top: scale(50),
    width: '100%',
    alignItems: 'center',
  },
  logoText: {
    color: Colors.WHITE,
    fontSize: Size.font_40,
    fontWeight: Weight.full,
    top: scale(10),
  },
  headerText: {
    color: Colors.WHITE,
    fontSize: Size.font_24,
    fontWeight: Weight.low,
    top: scale(20),
  },
  subHeaderText: {
    color: Colors.WHITE,
    fontSize: Size.font_24,
    fontWeight: 'semibold',
    top: scale(14),
  },
});
export default styles;
