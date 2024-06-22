/* eslint-disable prettier/prettier */
import React from 'react';
import Navigation from './src/navigation/Navigation';
import ProfileScreen from './src/screens/ProfileScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import MyCalendar from './src/screens/Mycalendar';
import Eventholiday from './src/screens/eventholiday';

export default function App() {
  // return <Navigation />;
  // return <DashboardScreen />;
  return <ProfileScreen navigation={undefined}/>
  // return <MyCalendar />
  // return <Eventholiday/>;


}
