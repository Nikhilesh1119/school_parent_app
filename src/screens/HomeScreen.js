import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import DashboardScreen from './DashboardScreen';
import ProfileStackNavigator from '../navigation/ProfileStackNavigator';
import Eventholiday from './eventholiday';
import Dashicon from '../assets/images/Dashicon.png';
import Calendaricon from '../assets/images/Calendaricon.png';
import Profileicon from '../assets/images/Profileicon.png';

const dashboard = 'Dashboard';
const attendance = 'Attendance';
const profile = 'ProfileScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const [attendanceStarted, setAttendanceStarted] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName={dashboard}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          let rn = route.name;

          if (rn === dashboard) {
            iconSource = Dashicon;
          } else if (rn === attendance) {
            iconSource = Calendaricon;
          } else if (rn === profile) {
            iconSource = Profileicon;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                { tintColor: focused ? 'purple' : 'grey' },
              ]}
            />
          );
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          paddingBottom: 10,
          fontSize: 10,
        },
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
        tabBarButton: props =>
          attendanceStarted && route.name !== attendance ? null : (
            <TouchableOpacity {...props} />
          ),
        headerShown: false,
      })}>
      <Tab.Screen name={dashboard} component={DashboardScreen} />
      <Tab.Screen name={attendance}>
        {() => <Eventholiday setAttendanceStarted={setAttendanceStarted} />}
      </Tab.Screen>
      <Tab.Screen name={profile} component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export default HomeScreen;
