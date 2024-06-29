import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Calendar from '@src/screens/EventHoliday/Components/Calendar/index';
import styles from './styles';
import {axiosClient} from '@src/services/axiosClient';

const Eventholiday = () => {
  const [eventsArr, setEventsArr] = useState([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const currentDate = new Date();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = currentDate.getDate();
  const dayName = dayNames[currentDate.getDay()];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  const handleOutsidePress = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axiosClient.get('/holiday-event');
      // console.log(response.data.result);
      const sortedEvents = response.data.result.sort(
        (a, b) => new Date(a.date) - new Date(b.date),
      );
      setEventsArr(sortedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Calendar</Text>
          <Text style={styles.headerSubtitle}>Key dates & Occasions</Text>
        </View>
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <ScrollView>
            <View style={styles.content}>
              <View style={styles.calendarContainer}>
                <View style={styles.calendarHeader}>
                  <Text style={styles.calendarMonth}>{month}</Text>
                  <Text style={styles.calendarYear}>, {year}</Text>
                </View>
                <View style={styles.calendar}>
                  <Calendar event={eventsArr} />
                </View>
              </View>

              {/* Holidays and Events Section */}
              <View style={styles.eventsContainer}>
                <ScrollView>
                  <Text style={styles.eventsTitle}>Holidays and Events</Text>
                  <Text style={styles.eventDate}>
                    {' '}
                    {day} {month} {year}, {dayName}
                  </Text>
                  <View style={styles.divider} />
                  {eventsArr.map((e, i) => (
                    <View key={i}>
                      <View style={styles.holidayItem}>
                        <View style={styles.holidayItemHeader}>
                          <View style={styles.holidayIndicator} />
                          <Text style={styles.holidayText}>{e.title}</Text>
                        </View>
                        <View style={styles.holidayLabel}>
                          <Text style={styles.holidayLabelText}>Holiday</Text>
                        </View>
                      </View>
                    </View>
                  ))}
                  {/* <View style={styles.holidayItem}>
                    <View style={styles.holidayItemHeader}>
                      <View style={styles.holidayIndicator} />
                      <Text style={styles.holidayText}>HOLI</Text>
                    </View>
                    <View style={styles.holidayLabel}>
                      <Text style={styles.holidayLabelText}>Holiday</Text>
                    </View>
                  </View> */}
                  {/* <View style={styles.eventItem}>
                    <View style={styles.eventItemHeader}>
                      <View style={styles.eventIndicator} />
                      <Text style={styles.eventText}>HOLI</Text>
                    </View>
                    <View style={styles.eventLabel}>
                      <Text style={styles.eventLabelText}>Occasion</Text>
                    </View>
                  </View> */}
                  {/* Add more event/holiday items here */}
                </ScrollView>
              </View>
              {/* End of Holidays and Events Section */}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </View>
    </GestureHandlerRootView>
  );
};

export default Eventholiday;
