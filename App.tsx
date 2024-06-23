/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Navigation from './src/navigation/Navigation';
import ProfileScreen from './src/screens/ProfileScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import MyCalendar from './src/screens/Mycalendar';
import Eventholiday from './src/screens/eventholiday';
import Orientation from 'react-native-orientation-locker';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/locale/i18n';

export default function App() {
  useEffect(() => {
    // Lock the orientation to portrait on component mount
    Orientation.lockToPortrait();
    // Optionally, unlock orientation on component unmount
    return () => {
      // Orientation.unlockAllOrientations();
    };
  }, []);
  // return <Navigation />;
  // return <DashboardScreen />;
  return <I18nextProvider i18n={i18n}><ProfileScreen navigation={undefined} /></I18nextProvider>
  // return <MyCalendar />
  // return <Eventholiday/>;


}
