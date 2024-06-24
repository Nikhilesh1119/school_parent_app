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
import Calendar from '../components/Calendar';
import { Size } from "../theme/fonts";
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

        {/* Sidebar Icon */}
        <TouchableOpacity
          style={styles.sidebarIcon}
          onPress={() => setIsSidebarVisible(!isSidebarVisible)}>
          <Text style={styles.sidebarIconText}>≡</Text>
        </TouchableOpacity>

        {/* Sidebar */}
        {isSidebarVisible && (
          <TouchableWithoutFeedback onPress={() => setIsSidebarVisible(false)}>
            <View style={styles.sidebar}>
              <View style={styles.sidebarHeader}>
                <Image
                  source={{uri: 'https://via.placeholder.com/50'}} // Replace with the actual profile image URL
                  style={styles.profileImage}
                />
                <Text style={styles.profileName}>John Doe</Text>
              </View>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarItemText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarItemText}>Privacy and Security</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarItemText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {backgroundColor: 'white', flex: 1},
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#0F0616',
    fontFamily: 'Satoshi',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F0616',
    paddingLeft: 5,
    marginTop: -2,
    fontFamily: 'Satoshi',
    top: '46px',
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4E297380',
    marginTop: 2,
    paddingLeft: 5,
  },
  content: {height: '100%'},
  calendarContainer: {
    paddingTop: 20,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#f5f0fb',
    borderRadius: 30,
    margin: 16,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  calendarHeader: {flexDirection: 'row', marginBottom: 10},
  calendarMonth: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E2973',
    paddingLeft: 10,
  },
  calendarYear: {fontSize: 24, fontWeight: 'bold', color: '#4E297380'},
  calendar: {marginBottom: 2},
  eventsContainer: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    maxWidth: 500,
    height: 300,
  },
  eventsTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0F0616',
    paddingLeft: 16,
  },
  eventDate: {
    marginTop: 0,
    fontWeight: 'bold',
    color: '#8F9BB3',
    paddingLeft: 16,
    fontSize: 18,
  },
  divider: {height: 1, marginTop: 14, backgroundColor: '#c084fc', opacity: 0.2},
  holidayItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 16,
    backgroundColor: '#fef2f2',
    borderRadius: 20,
    borderColor: '#ef4444',
    borderWidth: 1,
  },
  holidayItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#D91111',
  },
  holidayIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: '#D91111',
    borderWidth: 3,
  },
  holidayText: {marginLeft: 8, color: '#D91111', fontWeight: '900',fontSize:Size.font_18},
  holidayLabel: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#D91111',
    borderRadius: 10,
  },
  holidayLabelText: {color: 'white', fontWeight: 'bold',fontSize:Size.font_16},
  eventItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 8,
    backgroundColor: '#f3e8ff',
    borderRadius: 20,
    borderColor: '#4E2973',
    borderWidth: 1,
  },
  eventItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#8b5cf6',
  },
  eventIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: '#4E2973',
    borderWidth: 3,
  },
  eventText: {marginLeft: 8, color: '#4E2973', fontWeight: '900',fontSize: Size.font_16},
  eventLabel: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#4E2973',
    borderRadius: 10,
    
  },
  eventLabelText: {color: 'white', fontWeight: 'bold',fontSize:Size.font_16},
  sidebarIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    marginTop: -3,
    borderRadius: 4,
    zIndex: 10,
  },
  sidebarIconText: {color: '#091247', fontSize: 40},
  sidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 256,
    backgroundColor: '#f0f0f0',
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    padding: 20,
    zIndex: 50,
  },
  sidebarHeader: {flexDirection: 'row', alignItems: 'center', marginBottom: 20},
  profileImage: {width: 48, height: 48, borderRadius: 24, marginRight: 16},
  profileName: {fontSize: 24, fontWeight: 'bold', color: '#472966'},
  sidebarItem: {paddingVertical: 8},
  sidebarItemText: {fontSize: 18, color: '#714f92'},
});

export default Eventholiday;
