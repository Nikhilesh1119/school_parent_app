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
  Alert
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <ScrollView>
          <View style={{}}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#0F0616', fontFamily: 'Satoshi' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0F0616', paddingLeft:5,marginTop:-2, fontFamily: 'Satoshi', top: '46px' }}>Mahi Sharma</Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4E297380', marginTop: 2, paddingLeft: 5 }}>20 May, 2024</Text>
              </View>
              <TouchableOpacity
                style={{ position: 'absolute', top: 16, right: 16,marginTop:-3, borderRadius: 4, zIndex: 10 }}
                onPress={() => setIsSidebarVisible(!isSidebarVisible)}
              >
                <Text style={{ color: '#091247', fontSize: 40 }}>≡</Text>
              </TouchableOpacity>
            </View>

            {/* Calendar Component */}
            <View style={{ paddingTop: 20, paddingLeft: 2, paddingRight: 2, backgroundColor: 'rgba(78, 41, 115, 0.05)', borderRadius: 30, margin: 16, shadowColor: 'black', shadowOpacity: 0.8, shadowRadius: 10 }}>
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4E2973', paddingLeft: 10 }}>June</Text>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4E297380' }}> 2024</Text>
              </View>
              <Calendar />
            </View>

            {/* Attendance Summary */}
            <View style={{
      flex: 1,
      flexDirection: 'column',
      paddingHorizontal: 12,
      paddingVertical: 24,
      backgroundColor: 'white',
      borderRadius: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      maxWidth: 500,
      textAlign: 'center'
    }}>
      <View style={{ fontSize: 24 }}>
        <Text style={{ fontSize: 24, fontWeight: '900', color: '#0F0616' }}>Attendance</Text>
      </View>
      <View style={{ fontSize: 16, fontWeight: 'bold', color: '#4B5563', opacity: 0.5 }}>
        <Text style={{ marginTop: 5, fontSize: 18, fontWeight: 'bold', color: '#4E297380' }}>Out of total working days</Text>
      </View>
      <View style={{ marginTop: 14, height: 1, backgroundColor: '#7C3AED', opacity: 0.2 }} />
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        paddingVertical: 16,
        marginTop: 20,
        borderRadius: 12,
        backgroundColor: '#2DBEB11A', // teal-400 with opacity 0.1
      }}>
        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <View style={{ fontWeight: '900', color: '#1F2937' }}>
            <Text style={{ fontWeight: '900', color: '#1F2937', fontSize:23 }} >Month</Text>
          </View>
          <View style={{  fontWeight: 'bold', color: '#1F2937',  }}>
            <Text style={{ marginTop: 10, fontWeight: 'bold', color: '#1F2937', opacity: 0.6 }}>May 2024</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column'}}>
          <View style={{ letterSpacing: 1 }}>
            <Text style={{ flexDirection: 'column', fontWeight: '900', color: '#10B981',fontSize:20,marginTop:2}}>18/24</Text>
          </View>
          <View style={{ marginTop: 2, alignSelf: 'center' }}>
            <Text style={{ flexDirection: 'column', fontWeight: '900', color: '#10B981',fontSize:18,marginTop:2}}>Days</Text>
          </View>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 12,
        marginTop: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(94, 234, 212, 0.1)', // teal-400 with opacity 0.1
      }}>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ fontWeight: '900', color: '#1F2937' }}>
            <Text style={{ fontWeight: '900', color: '#1F2937', fontSize:23 }}>Year</Text>
          </View>
          <View style={{ marginTop: 5, fontWeight: 'bold', color: '#1F2937' }}>
            <Text style={{ marginTop: 5, fontWeight: 'bold', color: '#1F2937', opacity: 0.6 }} >2024</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', fontWeight: '900', color: '#10B981' }}>
          <View style={{ letterSpacing: 1 }}>
            <Text style={{ flexDirection: 'column', fontWeight: '900', color: '#10B981',fontSize:20,marginTop:2}}>179/270</Text>
          </View>
          <View style={{ marginTop: 14, alignSelf: 'center' }}>
            <Text style={{ flexDirection: 'column', fontWeight: '900', color: '#10B981',fontSize:18,marginTop:2}}>Days</Text>
          </View>
        </View>
      </View>
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
                  </View>
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

          {/* Slide Popup Component */}
          <Animated.View style={{
            transform: [{ translateY: slideAnim }],
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            shadowColor: 'black',
            shadowOpacity: 0.8,
            shadowRadius: 100,
            elevation:20,
            
            
          }}>
            <View style={{ paddingTop: 16, paddingBottom: 64, paddingHorizontal: 16, backgroundColor: 'white', borderTopLeftRadius: 32, borderTopRightRadius: 32, shadowColor: 'black', shadowOpacity: 0.8, shadowRadius: 10, }}>
            <View style={{display:'flex',justifyContent:'flex-end',width:'100%',alignItems:'flex-end'}} >
            <TouchableOpacity
                onPress={handleDoneClick}
                style={{
                  
                  alignItems: 'center',
                  paddingVertical: 5,
                  backgroundColor: '#4E2973',
                  borderRadius: 24,
                  width:'20%'
                  
                }}
              >
                
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Done</Text>
              </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center', marginBottom: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222B45' }}>Mark Attendance</Text>
              </View>
              <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ fontSize: 16, color: '#4E2973', fontWeight: '700' }}>2 May 2024, Thursday</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: -30}}>
                <TouchableOpacity
                  onPress={() => handleAttendanceClick('Absent')}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                    backgroundColor: selectedAttendance === 'Absent' ? '#F84914' : '#fcc3b1',
                    borderRadius: 24,
                    marginHorizontal: 8
                  }}
                >
                  <Text style={{ color: selectedAttendance === 'Absent' ? 'white' : '#F84914', fontWeight: 'bold' }}>Absent</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleAttendanceClick('Present')}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 12,
                    backgroundColor: selectedAttendance === 'Present' ? 'rgba(0, 128, 128, 0.8)' : 'rgba(0, 128, 128, 0.2)',
                    borderRadius: 24,
                    marginHorizontal: 8
                  }}
                >
                  <Text style={{ color: selectedAttendance === 'Present' ? 'white' : '#2DBEB1', fontWeight: 'bold' }}>Present</Text>
                </TouchableOpacity>
              </View>

             
            </View>
          </Animated.View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};

export default AttendanceDashboard;
