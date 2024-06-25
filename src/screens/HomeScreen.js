import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import DashboardScreen from './DashboardScreen';
import ProfileStackNavigator from '@src/navigation/ProfileStackNavigator';
import Eventholiday from './eventholiday';
import Dashicon from '@src/assets/images/Dashicon.png';
import Calendaricon from '@src/assets/images/Calendaricon.png';
import Profileicon from '@src/assets/images/Profileicon.png';
import { scale } from 'react-native-size-matters';

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
          paddingBottom: scale(10),
          fontSize: scale(10),
        },
        tabBarStyle: {
          padding: scale(10),
          height: scale(70),
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
    width: scale(25),
    height: scale(25),
  },
});

export default HomeScreen;
