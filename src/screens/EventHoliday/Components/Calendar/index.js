import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import colors from '@src/theme/colors';
import { scale } from 'react-native-size-matters';
import styles from './styles';

const MyCalendar = ({ event }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const formatDateString = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };

    const newMarkedDates = {};

    event.forEach(curr => {
      const date = formatDateString(curr.createdAt);
      newMarkedDates[date] = { marked: true, dotColor: colors.RED };
    });

    if (selectedDate) {
      newMarkedDates[selectedDate] = {
        selected: true,
        marked: true,
        selectedColor: colors.RED,
      };
    }

    console.log('New Marked Dates:', newMarkedDates); // Debugging line

    setMarkedDates(newMarkedDates);
  }, [event, selectedDate]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        hideArrows={true}
        hideExtraDays={true}
        disableMonthChange={true}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        renderHeader={() => null}
        theme={{
          backgroundColor: colors.WHITE,
          calendarBackground: colors.WHITE,
          textDayHeaderFontSize: scale(12),
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
        markedDates={markedDates}
      />
    </View>
  );
};

export default MyCalendar;
