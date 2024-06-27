import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import colors from '@src/theme/colors';
import { scale } from 'react-native-size-matters';
import styles from './styles';
const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress} // Handle day press event
        hideArrows={true} // Hide the arrows
        hideExtraDays={true}
        disableMonthChange={true}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        renderHeader={() => null}
        theme={{
          backgroundColor: colors.WHITE,
          calendarBackground: colors.WHITE,
          
          textDayHeaderFontSize: scale(12), // Set the day header text size
          // textDayHeaderColor: 'black', // Make day header text black
          
          // Custom style for selected date
          'stylesheet.day.single': {
            base: {
              width: scale(32),
              height: scale(32),
              alignItems: 'center',
              justifyContent: 'center',
            },
            text: {
              fontSize: scale(20),
              fontFamily: 'monospace',
              
              color: colors.BLACK,
            },
          },
        }}
        // Marked dates with custom styles
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: colors.RED},
        }}
      />
    </View>
  );
};



export default MyCalendar;
