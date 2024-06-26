import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import colors from '@src/theme/colors';
import { scale } from 'react-native-size-matters';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    borderBottomLeftRadius: scale(30), // Border radius at top-left
    borderBottomRightRadius: scale(30),
    overflow: 'hidden', // Ensure border radius is respected
    
    
  },
});

export default MyCalendar;
