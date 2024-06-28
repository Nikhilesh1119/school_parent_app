import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Pressable } from 'react-native';

import colors from '@src/theme/colors';
import { Size, Weight, Colors, Fonts } from '@src/theme/fonts';
import { scale } from 'react-native-size-matters';
import Backbutton from '../assets/images/Backbutton.png';
import Path2 from '../assets/images/Path2.png';
import Email from '../assets/images/Email.png';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../navigation/constant';

function ParentUpdate() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation=useNavigation();
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
      {/* Privacy and Security Section */}
      <View style={styles.section}>
        <Image
          resizeMode="contain"
          source={Backbutton}
          style={styles.image}
        />
        <Text style={styles.sectionTitle}>Privacy and Security</Text>
      </View>

      {/* Email Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Email</Text>
        <Text style={styles.description}>Add or update email address here</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Image
            resizeMode="contain"
            source={Email}
            style={styles.inputIcon}
          />
        </View>
      </View>

      {/* Phone Number Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.description}>Add or update phone number here</Text>
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Change Password Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Change Password</Text>
        <Text style={styles.description}>Update your password here</Text>
        <Pressable style={styles.updateButton}  onPress={()=>navigation.navigate(ROUTE.PARENT_PRIVACY)}>
          <Text style={styles.updateButtonText}>Tap to update</Text>
          <Image
            resizeMode="contain"
            source={Path2}
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>

      {/* Save Button */}
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(30),
    paddingHorizontal: scale(16),
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(20),
  },
  sectionTitle: {
    fontSize: Size.font_24,
    fontFamily: Fonts.BOLD,
    marginLeft: scale(30),
    marginBottom: scale(20),
    color: colors.INDIGO,
  },
  image: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
    marginTop: scale(-15),
  },
  inputContainer: {
    marginBottom: scale(20),
  },
  label: {
    fontSize: Size.font_20,
    fontFamily: Fonts.BOLD,
    marginBottom: scale(8),
    color: colors.INDIGO,
  },
  description: {
    fontSize: Size.font_16,
    color: colors.DARK_BLUE,
    marginBottom: scale(15),
    top: scale(8),
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(0.5),
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(10),
    backgroundColor: colors.WHITE,
  },
  input: {
    flex: 1,
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    fontSize: Size.fonts_16,
    borderWidth: scale(0.5),
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(10),
    backgroundColor: colors.WHITE,
    
  },
  inputIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(14),
    borderColor: colors.MODERATE_PURPLE,
    borderWidth: scale(1),
    backgroundColor: colors.WHITE,
    paddingVertical: scale(18),
    marginBottom: scale(15),
  },
  updateButtonText: {
    color: colors.GRAY1,
    fontFamily: Fonts.BOLD,
    paddingLeft: scale(10),
    flex: 1,
    fontSize:Size.fonts_24
  },
  buttonIcon: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
  },
  saveButton: {
    borderRadius: 40,
    backgroundColor: colors.PURPLE,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(18),
  },
  saveButtonText: {
    color: colors.WHITE,
    fontSize: Size.fonts_16,
    fontFamily: Fonts.BOLD,
  },
});

export default ParentUpdate;
