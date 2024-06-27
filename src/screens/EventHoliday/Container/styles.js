import { StyleSheet } from "react-native";
import colors from '@src/theme/colors';
import {Size, Fonts} from '@src/theme/fonts';

import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    root: { flex: 1 },
    container: { backgroundColor: colors.WHITE, flex: 1 },
    header: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: scale(16),
      backgroundColor: colors.WHITE,
      borderBottomWidth: scale(1),
      borderBottomColor: colors.INDIGO,
      marginBottom: scale(20),
    },
    headerTitle: {
      fontSize: scale(Size.font_20),
      color: colors.INDIGO,
      paddingLeft: scale(5),
      marginTop: scale(-2),
      fontFamily: Fonts.BOLD,
      
    },
    headerSubtitle: {
      fontSize: scale(Size.font_17),
      fontFamily: Fonts.BOLD,
      color: colors.LIGHT_PURPLE,
      marginTop: scale(2),
      paddingLeft: scale(5),
    },
    content: { height: '100%' },
    calendarContainer: {
      paddingTop: scale(20),
      paddingLeft: scale(2),
      paddingRight: scale(2),
      backgroundColor: colors.MID_PURPLE,
      borderRadius: scale(30),
      margin: scale(16),
      shadowColor: colors.BLACK,
      shadowOpacity: 0.2,
      shadowRadius: scale(10),
      elevation: scale(8),
    },
    calendarHeader: { flexDirection: 'row', marginBottom: scale(10) },
    calendarMonth: {
      fontSize: scale(Size.font_18),
      fontFamily: Fonts.BOLD,
      color: colors.PURPLE,
      paddingLeft: scale(10),
    },
    calendarYear: {
      fontSize: scale(Size.font_18),
      fontFamily: Fonts.BOLD,
      color: colors.LIGHT_PURPLE,
    },
    calendar: { marginBottom: scale(2) },
    eventsContainer: {
      flexDirection: 'column',
      padding: scale(16),
      backgroundColor: colors.WHITE,
      borderRadius: scale(20),
      maxWidth: scale(500),
    },
    eventsTitle: {
      fontSize: scale(Size.font_20),
      fontFamily: Fonts.BOLD,
      color: colors.INDIGO,
      paddingLeft: scale(16),
    },
    eventDate: {
      marginTop: scale(0),
      fontFamily: Fonts.MEDIUM,
      color: colors.GRAY,
      paddingLeft: scale(16),
      fontSize: scale(Size.font_16),
    },
    divider: {
      height: scale(1),
      marginTop: scale(14),
      backgroundColor: colors.GRAY,
      opacity: 0.2,
    },
    holidayItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scale(16),
      paddingVertical: scale(20),
      marginTop: scale(16),
      backgroundColor: colors.LIGHT_RED,
      borderRadius: scale(20),
      borderColor: colors.RED,
      borderWidth: scale(1),
    },
    holidayItemHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      color: colors.RED,
    },
    holidayIndicator: {
      width: scale(10),
      height: scale(10),
      borderRadius: scale(5),
      borderColor: colors.RED,
      borderWidth: scale(3),
    },
    holidayText: {
      marginLeft: scale(8),
      color: colors.RED,
      fontFamily: Fonts.BOLD,
      fontSize: scale(Size.font_16),
    },
    holidayLabel: {
      justifyContent: 'center',
      paddingHorizontal: scale(16),
      paddingVertical: scale(8),
      backgroundColor: colors.RED,
      borderRadius: scale(10),
    },
    holidayLabelText: {
      color: colors.WHITE,
      fontFamily: Fonts.BOLD,
      fontSize: scale(Size.font_16),
    },
    eventItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scale(16),
      paddingVertical: scale(20),
      marginTop: scale(8),
      backgroundColor: colors.LIGHT_INDIGO,
      borderRadius: scale(20),
      borderColor: colors.INDIGO,
      borderWidth: scale(1),
    },
    eventItemHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      color: colors.PURPLE,
    },
    eventIndicator: {
      width: scale(10),
      height: scale(10),
      borderRadius: scale(5),
      borderColor: colors.PURPLE1,
      borderWidth: scale(3),
    },
    eventText: {
      marginLeft: scale(8),
      color: colors.PURPLE1,
      fontFamily: Fonts.BOLD,
      fontSize: scale(Size.font_16),
    },
    eventLabel: {
      justifyContent: 'center',
      paddingHorizontal: scale(16),
      paddingVertical: scale(8),
      backgroundColor: colors.PURPLE1,
      borderRadius: scale(10),
    },
    eventLabelText: {
      color: colors.WHITE,
      fontFamily: Fonts.BOLD,
      fontSize: scale(Size.font_16),
    },
   
  });

  export default styles;