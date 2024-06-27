import { StyleSheet } from "react-native";
import colors from '@src/theme/colors';
import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';

import { scale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    root: {flex: 1},
    container: {},
    header: {flex: 1, backgroundColor: colors.WHITE},
    headerContent: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: scale(16),
      backgroundColor: colors.WHITE,
      borderBottomWidth: scale(1),
      borderBottomColor: colors.INDIGO,
    },
    nameText: {
      fontSize: Size.font_20,
      fontFamily: Fonts.BOLD,
      color: colors.INDIGO,
      paddingLeft: scale(5),
      marginTop: -scale(-2),
    },
    dateText: {
      fontSize: Size.font_20,
      fontFamily: Fonts.BOLD,
      color: colors.LIGHT_PURPLE,
      marginTop: 2,
      paddingLeft: 5,
    },
    menuButton: {
      position: 'absolute',
      top: scale(16),
      right: scale(16),
      marginTop: scale(-3),
      borderRadius: scale(4),
      zIndex: 10,
    },
    menuText: {color: colors.PURPLE1, fontSize: 40},
    calendarContainer: {
      paddingTop: scale(20),
      paddingLeft: scale(2),
      paddingRight: scale(2),
      backgroundColor: colors.Light_Purple1,
      borderRadius: scale(30),
      margin: scale(16),
      shadowColor: colors.BLACK,
      shadowOpacity: 0.8,
      shadowRadius: scale(10),
    },
    calendarHeader: {flexDirection: 'row', marginBottom: scale(10)},
    monthText: {
      fontSize: Size.font_18,
      fontFamily: Fonts.BOLD,
      color: colors.PURPLE,
      paddingLeft: scale(10),
      // fontFamily:Fonts.BOLD
    },
    yearText: {
      fontSize: Size.font_18,
      fontFamily: Fonts.BOLD,
      color: colors.LIGHT_PURPLE,
    },
    attendanceSummaryContainer: {
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: scale(20),
      paddingVertical: scale(24),
      backgroundColor: colors.WHITE,
      borderRadius: scale(24),
      shadowColor: colors.BLACK,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: scale(2),
      // maxWidth: scale(380),
      textAlign: 'center',
      marginHorizontal: scale(15),
      marginBottom: scale(5),
    },
    attendanceHeaderText: {
      fontSize: Size.font_20,
      fontFamily: Fonts.BOLD,
      color: colors.INDIGO,
    },
    attendanceSubHeaderText: {
      fontSize: Size.font_16,
      fontFamily: Fonts.MEDIUM_ITALIC,
      color: colors.LIGHT_PURPLE,
      marginTop: scale(5),
    },
    divider: {
      marginTop: scale(14),
      height: scale(1),
      backgroundColor: colors.LIGHT_PURPLE,
      opacity: 0.2,
    },
    summaryBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: scale(28),
      paddingVertical: scale(16),
      marginTop: scale(20),
      borderRadius: scale(12),
      backgroundColor: colors.LIGHT_GREEN,
    },
    summaryTextContainer: {flexDirection: 'column', alignItems: 'flex-start'},
    summaryTitleText: {
      fontFamily: Fonts.BOLD,
      color: colors.INDIGO,
      fontSize: Size.font_18,
    },
    summarySubtitleText: {
      marginTop: scale(10),
      fontFamily: Fonts.BOLD,
      color: colors.DARK_GRAY,
      opacity: 0.6,
      fontSize: Size.font_18,
    },
    summaryValueContainer: {flexDirection: 'column'},
    summaryValueText: {
      fontFamily: Fonts.BOLD,
      color: colors.GREEN,
      fontSize: Size.font_18,
      marginTop: scale(2),
    },
    summaryDaysText: {
      fontFamily: Fonts.BOLD,
      color: colors.GREEN,
      fontSize: scale(18),
      marginTop: scale(2),
      fontSize: Size.font_18,
    },
    sidebar: {
      position: 'absolute',
      right: scale(0),
      top: scale(0),
      bottom: scale(0),
      width: scale(256),
      backgroundColor: Colors.CREAM_WHITE,
      borderLeftWidth: 1,
      borderLeftColor: colors.WHITE,
      padding: scale(20),
      zIndex: 50,
    },
    sidebarHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: scale(20)},
    sidebarHeadersub: {flexDirection: 'col', top: scale(4)},
    profileImage: {width: scale(55), height: scale(55), borderRadius: scale(24), marginRight: scale(18)},
    profileName: {
      fontSize: Size.font_18,
      fontFamily: Fonts.BOLD,
      color: colors.PURPLE1,
    },
    sidebarEdit: {
      fontSize: Size.font_11,
      fontWeight: Weight.semi,
      borderRadius: scale(10),
      paddingHorizontal: scale(15),
      backgroundColor: colors.MID_GRAY,
      top: scale(3),
      marginLeft: scale(-5),
    },
    sidebarEditText: {color: colors.PURPLE1},
    sidebarItem: {paddingVertical: scale(8), top: scale(15)},
    sidebarItemText: {
      fontSize: Size.font_14,
      color: colors.PURPLE1,
      fontFamily: Fonts.BOLD,
      backgroundColor: colors.WHITE,
      padding: scale(4),
      borderRadius: scale(15),
    },
    popup: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: colors.WHITE,
      borderTopLeftRadius: scale(32),
      borderTopRightRadius: scale(32),
      shadowColor: colors.BLACK,
      shadowOpacity: 0.8,
      shadowRadius: scale(100),
      elevation: scale(20),
      zIndex: 1000,
    },
    popupContent: {
      paddingTop: scale(16),
      paddingBottom: scale(64),
      paddingHorizontal: scale(16),
      backgroundColor: colors.WHITE,
      borderTopLeftRadius: scale(32),
      borderTopRightRadius: scale(32),
      shadowColor: colors.BLACK,
      shadowOpacity: 0.8,
      shadowRadius: scale(10),
    },
    popupButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      alignItems: 'flex-end',
    },
    doneButton: {
      alignItems: 'center',
      paddingVertical: scale(5),
      backgroundColor: colors.PURPLE,
      borderRadius: scale(24),
      width: '20%',
    },
    doneButtonText: {
      color: colors.WHITE,
      fontFamily: Fonts.MEDIUM,
      fontSize: Size.font_16,
    },
    popupHeader: {marginLeft: scale(12), marginBottom: scale(5)},
    popupHeaderText: {
      fontSize: Size.font_20,
      fontFamily: Fonts.BOLD,
      color: colors.DARK_BLUE,
    },
    popupDateText: {
      fontSize: Size.font_20,
      color: colors.PURPLE,
      fontFamily: Fonts.MEDIUM,
      marginBottom: scale(20),
    },
    attendanceOptionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: scale(-30),
    },
    attendanceOption: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: scale(12),
      borderRadius: scale(24),
      marginHorizontal: scale(8),
    },
    attendanceOptionText: {fontFamily: Fonts.BOLD, fontSize: Size.font_16},
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 999,
    },
  });
  export default styles;