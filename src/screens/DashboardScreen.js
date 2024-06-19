import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Calendar from '../components/Calendar';  // Assuming Calendar is a custom component

const AttendanceDashboard = () => {
  const [selectedView, setSelectedView] = useState('Daily');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [totalDaysPresentMonth, setTotalDaysPresentMonth] = useState(0);
  const [totalClassDaysMonth, setTotalClassDaysMonth] = useState(30); // Example value
  const [totalDaysPresentYear, setTotalDaysPresentYear] = useState(0);
  const [totalClassDaysYear, setTotalClassDaysYear] = useState(180); // Example value
  const swipeableRef = useRef(null);

  useEffect(() => {
    // Fetch or calculate the actual values for totalDaysPresentMonth, totalClassDaysMonth,
    // totalDaysPresentYear, and totalClassDaysYear here, possibly from a backend or local storage.
    // The following are just example values for demonstration.
    setTotalDaysPresentMonth(20);
    setTotalDaysPresentYear(150);
  }, []);

  const handleSwipe = (status) => {
    Alert.alert(
      `Confirm ${status}`,
      `Are you sure you want to mark the student as ${status.toLowerCase()}?`,
      [
        {
          text: "Cancel",
          onPress: () => {
            // Close swipeable and reset position
            swipeableRef.current.close();
          },
          style: "cancel"
        },
        { text: "OK", onPress: () => setConfirmationMessage(`Child marked as ${status.toLowerCase()}`) }
      ]
    );
  };

  const renderLeftActions = (progress, dragX) => {
    return (
      <View style={{ backgroundColor: 'green', flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingLeft: 16 }}>Mark Present</Text>
      </View>
    );
  };

  const renderRightActions = (progress, dragX) => {
    return (
      <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, paddingRight: 16, textAlign: 'right' }}>Mark Absent</Text>
      </View>
    );
  };

  const handleOutsidePress = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: 'gray' }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4A148C' }}>Attendance</Text>
              <TouchableOpacity
                style={{ padding: 8, backgroundColor: '#9d82b7', borderRadius: 4 }}
                onPress={() => setIsSidebarVisible(!isSidebarVisible)}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>≡</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 18, color: '#8669a2', marginLeft: 16, marginVertical: 8 }}>31 May, 2024</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginVertical: 8 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4A148C' }}>mahi sharma</Text>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4A148C' }}>8th - A</Text>
            </View>

            <View style={{ backgroundColor: '#f5f5f5', borderRadius: 8, margin: 16, padding: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#8669a2', marginBottom: 8 }}>Mark the Attendance of your child</Text>
              <View>
                <Swipeable
                  ref={swipeableRef}
                  renderLeftActions={renderLeftActions}
                  renderRightActions={renderRightActions}
                  onSwipeableLeftOpen={() => handleSwipe('Present')}
                  onSwipeableRightOpen={() => handleSwipe('Absent')}
                >
                  <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color: 'orange' }}>Swipe to Mark Attendance</Text>
                  </View>
                </Swipeable>
              </View>
              {confirmationMessage ? (
                <Text style={{ textAlign: 'center', color: 'black', marginTop: 8 }}>{confirmationMessage}</Text>
              ) : null}
            </View>

            {/* Calendar Component */}
            <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, margin: 16, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#8669a2' }}>Calendar</Text>
                <Text style={{ fontSize: 18, color: '#8669a2' }}>31 May, 2024</Text>
              </View>
              <Calendar />
            </View>

            {/* Attendance Summary */}
            <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, margin: 16, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#8669a2', marginBottom: 8 }}>Attendance Summary</Text>
              <Text style={{ fontSize: 18, color: 'gray',marginTop:10 }}>Month:     {totalDaysPresentMonth} / {totalClassDaysMonth} days present</Text>
              <Text style={{ fontSize: 18, color: 'gray',marginTop:10 }}>Year:     {totalDaysPresentYear} / {totalClassDaysYear} days present</Text>
            </View>

            {/* Sidebar */}
            {isSidebarVisible && (
              <TouchableWithoutFeedback onPress={() => setIsSidebarVisible(false)}>
                <View style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 256, backgroundColor: '#f0f0f0', borderLeftWidth: 1, borderLeftColor: 'gray', padding: 20, zIndex: 50 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Image
                      source={{ uri: 'https://via.placeholder.com/50' }} // Replace with the actual profile image URL
                      style={{ width: 48, height: 48, borderRadius: 24, marginRight: 16 }}
                    />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#472966' }}>John Doe</Text>
                  </View >
                  <TouchableOpacity style={{ paddingVertical: 8 }}>
                    <Text style={{ fontSize: 18, color: '#714f92' }}>Edit Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingVertical: 8 }}>
                    <Text style={{ fontSize: 18, color: '#714f92' }}>Privacy and Security</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ paddingVertical: 8 }}>
                    <Text style={{ fontSize: 18, color: '#714f92' }}>Logout</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};

export default AttendanceDashboard;
