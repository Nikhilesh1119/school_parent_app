import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Animated,
  Easing,
  Dimensions,
  Alert,
  StyleSheet
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Calendar from '../components/Calendar'; // Assuming Calendar is a custom component

const AttendanceDashboard = () => {
  const [selectedView, setSelectedView] = useState('Daily');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [totalDaysPresentMonth, setTotalDaysPresentMonth] = useState(0);
  const [totalClassDaysMonth, setTotalClassDaysMonth] = useState(30); // Example value
  const [totalDaysPresentYear, setTotalDaysPresentYear] = useState(0);
  const [totalClassDaysYear, setTotalClassDaysYear] = useState(180); // Example value
  const [selectedAttendance, setSelectedAttendance] = useState(null); // Track selected attendance
  const swipeableRef = useRef(null);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  useEffect(() => {
    // Fetch or calculate the actual values for totalDaysPresentMonth, totalClassDaysMonth,
    // totalDaysPresentYear, and totalClassDaysYear here, possibly from a backend or local storage.
    // The following are just example values for demonstration.
    setTotalDaysPresentMonth(20);
    setTotalDaysPresentYear(150);

    // Slide in the popup from below
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleOutsidePress = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

  const handleAttendanceClick = (status) => {
    setSelectedAttendance(status);
  };

  const handleDoneClick = () => {
    if (!selectedAttendance) {
      Alert.alert('Error', 'Please select an attendance status before proceeding.');
      return;
    }

    // Close the popup
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').height,
      duration: 500,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      // Save the selected attendance or perform any other actions here
      Alert.alert('Attendance Marked', `You marked this day as ${selectedAttendance}`);
    });
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.nameText}>Mahi Sharma</Text>
                <Text style={styles.dateText}>20 May, 2024</Text>
              </View>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setIsSidebarVisible(!isSidebarVisible)}
              >
                <Text style={styles.menuText}>≡</Text>
              </TouchableOpacity>
            </View>

            {/* Calendar Component */}
            <View style={styles.calendarContainer}>
              <View style={styles.calendarHeader}>
                <Text style={styles.monthText}>June</Text>
                <Text style={styles.yearText}> 2024</Text>
              </View>
              <Calendar />
            </View>

            {/* Attendance Summary */}
            <View style={styles.attendanceSummaryContainer}>
              <View>
                <Text style={styles.attendanceHeaderText}>Attendance</Text>
              </View>
              <View>
                <Text style={styles.attendanceSubHeaderText}>Out of total working days</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryBox}>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryTitleText}>Month</Text>
                  <Text style={styles.summarySubtitleText}>May 2024</Text>
                </View>
                <View style={styles.summaryValueContainer}>
                  <Text style={styles.summaryValueText}>18/24</Text>
                  <Text style={styles.summaryDaysText}>Days</Text>
                </View>
              </View>
              <View style={styles.summaryBox}>
                <View style={styles.summaryTextContainer}>
                  <Text style={styles.summaryTitleText}>Year</Text>
                  <Text style={styles.summarySubtitleText}>2024</Text>
                </View>
                <View style={styles.summaryValueContainer}>
                  <Text style={styles.summaryValueText}>179/270</Text>
                  <Text style={styles.summaryDaysText}>Days</Text>
                </View>
              </View>
            </View>

            {/* Sidebar */}
            {isSidebarVisible && (
              <TouchableWithoutFeedback onPress={() => setIsSidebarVisible(false)}>
                <View style={styles.sidebar}>
                  <View style={styles.sidebarHeader}>
                    <Image
                      source={{ uri: 'https://via.placeholder.com/50' }} // Replace with the actual profile image URL
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

          {/* Slide Popup Component */}
          <Animated.View style={[styles.popup, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.popupContent}>
              <View style={styles.popupButtonContainer}>
                <TouchableOpacity
                  onPress={handleDoneClick}
                  style={styles.doneButton}
                >
                  <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.popupHeader}>
                <Text style={styles.popupHeaderText}>Mark Attendance</Text>
                <Text style={styles.popupDateText}>2 May 2024, Thursday</Text>
              </View>
              <View style={styles.attendanceOptionsContainer}>
                <TouchableOpacity
                  onPress={() => handleAttendanceClick('Absent')}
                  style={[
                    styles.attendanceOption,
                    { backgroundColor: selectedAttendance === 'Absent' ? '#F84914' : '#fcc3b1' },
                  ]}
                >
                  <Text style={[
                    styles.attendanceOptionText,
                    { color: selectedAttendance === 'Absent' ? 'white' : '#F84914' }
                  ]}>Absent</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleAttendanceClick('Present')}
                  style={[
                    styles.attendanceOption,
                    { backgroundColor: selectedAttendance === 'Present' ? 'rgba(0, 128, 128, 0.8)' : 'rgba(0, 128, 128, 0.2)' },
                  ]}
                >
                  <Text style={[
                    styles.attendanceOptionText,
                    { color: selectedAttendance === 'Present' ? 'white' : '#2DBEB1' }
                  ]}>Present</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  container: {},
  header: { flex: 1, backgroundColor: 'white' },
  headerContent: { flexDirection: 'column', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#0F0616' },
  nameText: { fontSize: 24, fontWeight: 'bold', color: '#0F0616', paddingLeft: 5, marginTop: -2 },
  dateText: { fontSize: 24, fontWeight: 'bold', color: '#4E297380', marginTop: 2, paddingLeft: 5 },
  menuButton: { position: 'absolute', top: 16, right: 16, marginTop: -3, borderRadius: 4, zIndex: 10 },
  menuText: { color: '#091247', fontSize: 40 },
  calendarContainer: { paddingTop: 20, paddingLeft: 2, paddingRight: 2, backgroundColor: 'rgba(78, 41, 115, 0.05)', borderRadius: 30, margin: 16, shadowColor: 'black', shadowOpacity: 0.8, shadowRadius: 10 },
  calendarHeader: { flexDirection: 'row', marginBottom: 10 },
  monthText: { fontSize: 24, fontWeight: 'bold', color: '#4E2973', paddingLeft: 10 },
  yearText: { fontSize: 24, fontWeight: 'bold', color: '#4E297380' },
  attendanceSummaryContainer: { flex: 1, flexDirection: 'column', paddingHorizontal: 12, paddingVertical: 24, backgroundColor: 'white', borderRadius: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1.41, elevation: 2, maxWidth: 500, textAlign: 'center' },
  attendanceHeaderText: { fontSize: 24, fontWeight: '900', color: '#0F0616' },
  attendanceSubHeaderText: { fontSize: 18, fontWeight: 'bold', color: '#4E297380', marginTop: 5 },
  divider: { marginTop: 14, height: 1, backgroundColor: '#7C3AED', opacity: 0.2 },
  summaryBox: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 28, paddingVertical: 16, marginTop: 20, borderRadius: 12, backgroundColor: '#2DBEB11A' },
  summaryTextContainer: { flexDirection: 'column', alignItems: 'flex-start' },
  summaryTitleText: { fontWeight: '900', color: '#1F2937', fontSize: 23 },
  summarySubtitleText: { marginTop: 10, fontWeight: 'bold', color: '#1F2937', opacity: 0.6 },
  summaryValueContainer: { flexDirection: 'column' },
  summaryValueText: { fontWeight: '900', color: '#10B981', fontSize: 20, marginTop: 2 },
  summaryDaysText: { fontWeight: '900', color: '#10B981', fontSize: 18, marginTop: 2 },
  sidebar: { position: 'absolute', right: 0, top: 0, bottom: 0, width: 256, backgroundColor: '#f0f0f0', borderLeftWidth: 1, borderLeftColor: 'gray', padding: 20, zIndex: 50 },
  sidebarHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 48, height: 48, borderRadius: 24, marginRight: 16 },
  profileName: { fontSize: 24, fontWeight: 'bold', color: '#472966' },
  sidebarItem: { paddingVertical: 8 },
  sidebarItemText: { fontSize: 18, color: '#714f92' },
  popup: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOpacity: 0.8, shadowRadius: 100, elevation: 20 },
  popupContent: { paddingTop: 16, paddingBottom: 64, paddingHorizontal: 16, backgroundColor: 'white', borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOpacity: 0.8, shadowRadius: 10 },
  popupButtonContainer: { display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'flex-end' },
  doneButton: { alignItems: 'center', paddingVertical: 5, backgroundColor: '#4E2973', borderRadius: 24, width: '20%' },
  doneButtonText: { color: 'white', fontWeight: 'bold' },
  popupHeader: { alignItems: 'center', marginBottom: 5 },
  popupHeaderText: { fontSize: 20, fontWeight: 'bold', color: '#222B45' },
  popupDateText: { fontSize: 16, color: '#4E2973', fontWeight: '700', marginBottom: 20 },
  attendanceOptionsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: -30 },
  attendanceOption: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 12, borderRadius: 24, marginHorizontal: 8 },
  attendanceOptionText: { fontWeight: 'bold' },
});

export default AttendanceDashboard;
