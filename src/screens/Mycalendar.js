import React from 'react';
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { styled } from 'nativewind';

const MyCalendar = () => {
  return (
    <StyledView className="flex-1 bg-white p-4">
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
          direction === 'left' ? <Text className="text-lg">«</Text> : <Text className="text-lg">»</Text>
        }
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        disableArrowLeft={false}
        disableArrowRight={false}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markedDates={{
          '2024-06-16': {
            selected: false, // Ensure it's not selected
          },
        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          selectedDotColor: '#ffffff',
          arrowColor: 'orange',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'blue',
          indicatorColor: 'blue',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </StyledView>
  );
};

const StyledView = styled(View);

export default MyCalendar;
