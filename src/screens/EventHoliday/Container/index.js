import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Calendar from '@src/screens/EventHoliday/Components/Calendar/index';
import styles from './styles';
const Eventholiday = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOutsidePress = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

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
                  <Text style={styles.calendarMonth}>June</Text>
                  <Text style={styles.calendarYear}>, 2024</Text>
                </View>
                <View style={styles.calendar}>
                  <Calendar />
                </View>
              </View>

              {/* Holidays and Events Section */}
              <View style={styles.eventsContainer}>
                <ScrollView>
                  <Text style={styles.eventsTitle}>Holidays and Events</Text>
                  <Text style={styles.eventDate}>3 May 2024, Friday</Text>
                  <View style={styles.divider} />
                  <View style={styles.holidayItem}>
                    <View style={styles.holidayItemHeader}>
                      <View style={styles.holidayIndicator} />
                      <Text style={styles.holidayText}>HOLI</Text>
                    </View>
                    <View style={styles.holidayLabel}>
                      <Text style={styles.holidayLabelText}>Holiday</Text>
                    </View>
                  </View>
                  <View style={styles.eventItem}>
                    <View style={styles.eventItemHeader}>
                      <View style={styles.eventIndicator} />
                      <Text style={styles.eventText}>HOLI</Text>
                    </View>
                    <View style={styles.eventLabel}>
                      <Text style={styles.eventLabelText}>Occasion</Text>
                    </View>
                  </View>
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
