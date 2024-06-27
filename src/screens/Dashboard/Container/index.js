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
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Calendar from '@src/screens/Dashboard/Components/Calendar/index'; // Assuming Calendar is a custom component
import colors from '@src/theme/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons'; // Add this line to import the Icon component
import Navigation from '../../../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../../navigation/constant';
const AttendanceDashboard = () => {
  const navigation=useNavigation();
  const [selectedView, setSelectedView] = useState('Daily');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [totalDaysPresentMonth, setTotalDaysPresentMonth] = useState(0);
  const [totalClassDaysMonth, setTotalClassDaysMonth] = useState(30); // Example value
  const [totalDaysPresentYear, setTotalDaysPresentYear] = useState(0);
  const [totalClassDaysYear, setTotalClassDaysYear] = useState(180); // Example value
  const [selectedAttendance, setSelectedAttendance] = useState(null); // Track selected attendance
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Track popup visibility
  const swipeableRef = useRef(null);
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height)
  ).current;

  useEffect(() => {
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

  const handleAttendanceClick = status => {
    setSelectedAttendance(status);
  };

  const handleDoneClick = () => {
    if (!selectedAttendance) {
      Alert.alert(
        'Error',
        'Please select an attendance status before proceeding.'
      );
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
      setIsPopupVisible(false);
      Alert.alert(
        'Attendance Marked',
        `You marked this day as ${selectedAttendance}`
      );
    });
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <ScrollView scrollEnabled={!isPopupVisible}>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.nameText}>Mahi Sharma</Text>
                <Text style={styles.dateText}>23 June, 2024</Text>
              </View>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setIsSidebarVisible(!isSidebarVisible)}
                disabled={isPopupVisible}
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
                <Text style={styles.attendanceSubHeaderText}>
                  Out of total working days
                </Text>
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
              <TouchableWithoutFeedback
                onPress={() => setIsSidebarVisible(false)}
              >
                <View style={styles.sidebar}>
                  <View style={styles.sidebarHeader}>
                    <Image
                      source={{ uri: 'https://via.placeholder.com/50' }} // Replace with the actual profile image URL
                      style={styles.profileImage}
                    />
                    <View style={styles.sidebarHeadersub}>
                      <Text style={styles.profileName}>John Doe</Text>
                      <TouchableOpacity style={styles.sidebarEdit} onPress={()=>navigation.navigate(ROUTE.PARENT_EDIT)}>
                        <Text style={styles.sidebarEditText}>Edit Profile</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.sidebarItem}>
                    <Icon name="lock-closed" size={20} color={colors.PURPLE1} />
                    <Text style={styles.sidebarItemText}>
                      Privacy and Security
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.sidebarItem}>
                    <Icon name="log-out" size={20} color={colors.PURPLE1} />
                    <Text style={styles.sidebarItemText}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>

          {/* Overlay for locking screen */}
          {isPopupVisible && (
            <TouchableWithoutFeedback onPress={() => setIsPopupVisible(false)}>
              <View style={styles.overlay} />
            </TouchableWithoutFeedback>
          )}

          {/* Slide Popup Component */}
          <Animated.View
            style={[styles.popup, { transform: [{ translateY: slideAnim }] }]}
          >
            <TouchableWithoutFeedback onPress={() => setIsPopupVisible(false)}>
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
                      {
                        backgroundColor:
                          selectedAttendance === 'Absent'
                            ? colors.DARK_ORANGE
                            : colors.LIGHT_ORANGE,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.attendanceOptionText,
                        {
                          color:
                            selectedAttendance === 'Absent'
                              ? colors.WHITE
                              : colors.DARK_ORANGE,
                        },
                      ]}
                    >
                      Absent
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleAttendanceClick('Present')}
                    style={[
                      styles.attendanceOption,
                      {
                        backgroundColor:
                          selectedAttendance === 'Present'
                            ? colors.DARK_CYAN
                            : colors.LIGHT_CYAN,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.attendanceOptionText,
                        {
                          color:
                            selectedAttendance === 'Present'
                              ? colors.WHITE
                              : colors.DARK_CYAN,
                        },
                      ]}
                    >
                      Present
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};

export default AttendanceDashboard;
