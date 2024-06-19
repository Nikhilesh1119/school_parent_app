import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  return (
    <View style={styles.container}>
      <Calendar
        current={'2024-06-13'}
        minDate={'2022-05-10'}
        maxDate={'2025-05-30'}
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideArrows={false}
        hideExtraDays={true}
        disableMonthChange={true}
        renderArrow={(direction) =>
          direction === 'left' ? (
            <Text style={styles.arrow}>«</Text>
          ) : (
            <Text style={styles.arrow}>»</Text>
          )
        }
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markedDates={{
          '2024-06-16': { selected: true, marked: true, selectedColor: 'blue' },
          '2024-06-17': { marked: true },
          '2024-06-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
          '2024-06-19': { disabled: false, disableTouchEvent: true },
        }}
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
          monthTextColor: 'purple',
          indicatorColor: 'purple',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  arrow: {
    fontSize: 24,
    color: 'orange',
    padding: 10,
  },
});

export default MyCalendar;
