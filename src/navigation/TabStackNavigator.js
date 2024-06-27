import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import DashboardScreen from '@src/screens/Dashboard/Container/index';
import ProfileStackNavigator from '@src/navigation/ProfileStackNavigator';
import Eventholiday from '@src/screens/EventHoliday/Container/index';
import Dashicon from '@src/assets/images/Dashicon.png';
import Calendaricon from '@src/assets/images/Calendaricon.png';
import Profileicon from '@src/assets/images/Profileicon.jpeg';
import { scale } from 'react-native-size-matters';
import { ROUTE } from './constant';
import colors from '@src/theme/colors';



const Tab = createBottomTabNavigator();

function TabStackNavigator() {
  const [attendanceStarted, setAttendanceStarted] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName={ROUTE.DASHBOARD}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {
          let iconSource;
          let rn = route.name;

          if (rn === ROUTE.DASHBOARD) {
            iconSource = Dashicon;
          } else if (rn === ROUTE.ATTENDANCE) {
            iconSource = Calendaricon;
          } else if (rn === ROUTE.PROFILE_SCREEN) {
            iconSource = Profileicon;
          }

          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                { tintColor: focused ? colors.PURPLE : colors.MID_GRAY },
              ]}
            />
          );
        },
        tabBarActiveTintColor: colors.PURPLE,
        tabBarInactiveTintColor: colors.MID_GRAY ,
        tabBarLabelStyle: {
          paddingBottom: scale(10),
          fontSize: scale(10),
        },
        tabBarStyle: {
          padding: scale(10),
          height: scale(70),
        },
        tabBarButton: props =>
          attendanceStarted && route.name !== ROUTE.ATTENDANCE ? null : (
            <TouchableOpacity {...props} />
          ),
        headerShown: false,
      })}>
      <Tab.Screen name={ROUTE.DASHBOARD} component={DashboardScreen} />
      <Tab.Screen name={ROUTE.ATTENDANCE}>
        {() => <Eventholiday setAttendanceStarted={setAttendanceStarted} />}
      </Tab.Screen>
      <Tab.Screen name={ROUTE.PROFILE} component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: scale(25),
    height: scale(25),
  },
});

export default TabStackNavigator;
