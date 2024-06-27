/* eslint-disable prettier/prettier */
import React, { useMemo, useState, useRef,useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import bgvideo from '@src/assets/videos/loginBG.mp4';
import BottomSheet from '@gorhom/bottom-sheet';
import LoginForm from '@src/screens/Login/Components/LoginForm';

import styles from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function LoginScreen() {
 
  const snapPoints = useMemo(() => ['100%'], []);
  const bottomSheetRef = useRef(null);

  const handleClosePress = () => {
    bottomSheetRef.current?.close();
  };
  const handleOpenPress = () => {
    console.log("Button Pressed"); // Debug log
    bottomSheetRef.current?.expand();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <Video
          resizeMode="cover"
          muted={true}
          repeat
          source={bgvideo}
          style={styles.backgroundVideo}
        />
        <View style={styles.header}>
        <Text style={styles.logoText}>Logo</Text>
          <Text style={styles.headerText}>Monitor Attendance</Text>
          <Text style={styles.subHeaderText}>Anytime!</Text>
        </View>
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.swipeContainer}
            onPress={handleOpenPress}>
            <Text style={styles.swipeText}>Click to Login</Text>
          </TouchableOpacity>
          <BottomSheet
            enablePanDownToClose={true}
            snapPoints={snapPoints}
            index={-1}
            ref={bottomSheetRef}
            backgroundStyle={{ borderRadius: 50 }}>
            <View style={styles.contentContainer}>
              <LoginForm />
            </View>
          </BottomSheet>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

export default LoginScreen;
