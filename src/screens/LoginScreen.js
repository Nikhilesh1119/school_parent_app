/* eslint-disable prettier/prettier */
import React, { useMemo, useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import bgvideo from '../assets/videos/loginBG.mp4';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';
import LoginForm from '../components/LoginForm';

function useStyles() {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: 50,
    },
    swipeContainer: {
      alignItems: 'center',
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
    },
    swipeText: {
      alignSelf: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    header: {
      position: 'absolute',
      top: 50,
      width: '100%',
      alignItems: 'center',
    },
    logoText:{
      color: 'white',
      fontSize: 40,
      fontWeight: '800',
      top:10

    },

    headerText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'semibold',
      top:10
    },
    subHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'semibold',
      top:8
    },
  });
}

function LoginScreen() {
  const styles = useStyles();
  const snapPoints = useMemo(() => ['60%'], []);
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
