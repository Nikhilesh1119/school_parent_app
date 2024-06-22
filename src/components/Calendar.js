import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-06-13'}
        minDate={'2022-05-10'}
        maxDate={'2025-05-30'}
        onDayPress={handleDayPress} // Handle day press event
        hideArrows={true} // Hide the arrows
        hideExtraDays={true}
        disableMonthChange={true}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'black',
          dayTextColor: 'black',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'transparent', // Make month text transparent
          indicatorColor: 'purple',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '600',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: 'bold', // Make day header text bold
          textDayFontSize: 16, // Increase the day text size
          textMonthFontSize: 20,
          textDayHeaderFontSize: 16, // Set the day header text size
          textDayHeaderColor: 'black', // Make day header text black
          
          // Custom style for selected date
          'stylesheet.day.single': {
            base: {
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
            },
            text: {
              fontSize: 20,
              fontFamily: 'monospace',
              fontWeight: '300',
              color: 'black',
            },
          },
        }}
        // Marked dates with custom styles
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: '#D91111' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30, // Border radius at top-left
    borderBottomRightRadius: 30,
    overflow: 'hidden', // Ensure border radius is respected
    
    
  },
});

export default MyCalendar;
