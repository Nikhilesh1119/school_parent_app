import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, Pressable } from "react-native";

import colors from '@src/theme/colors';
import { Size, Weight, Colors, Fonts } from '@src/theme/fonts';
import { scale } from 'react-native-size-matters';

function ParentUpdate() {
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

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
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/31fdcf36ef7c35c6aff84728b376cb10ff05976bc9d122d530994faee5dbcc83?apiKey=5571847fc48447bbad48faecb3b890d9&",
          }}
          style={styles.image}
        />
        <Text style={styles.sectionTitle}>Privacy and Security</Text>
      </View>

      {/* Email Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Your Email</Text>
        <Text style={styles.description}>Add or update email address here</Text>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ad63655cdb143a02254e7e67cfd8b26354f89953085d307a4fe09ccc925b43a?apiKey=5571847fc48447bbad48faecb3b890d9&",
          }}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      {/* Phone Number Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.description}>Add or update phone number here</Text>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/65942aacc5820d5683e5f3d3adac4fc25b8994ea570a4828cff813e54c880bf5?apiKey=5571847fc48447bbad48faecb3b890d9&",
          }}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Change Password Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Change Password</Text>
        <Text style={styles.description}>Update your password here</Text>
        <Pressable style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Tap to update</Text>
        </Pressable>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eaaf2134dc0b083a7ffeb3b0a0670c049e332a28cb17dfbf64d1b860e401c4d6?apiKey=5571847fc48447bbad48faecb3b890d9&",
          }}
          style={styles.image}
        />
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
    fontFamily:Fonts.MEDIUM,
    marginLeft: scale(40),
    marginBottom:scale(20)
  },
  image: {
    width: scale(24),
    height: scale(24),
    marginRight: scale(10),
  },
  inputContainer: {
    marginBottom: scale(20),
    color: colors.LIGHT_YELLOW,
  },
  label: {
    fontSize: Size.font_20,
    fontFamily:Fonts.MEDIUM,
    marginBottom: scale(8),
  },
  description: {
    fontSize: Size.font_16,
    color: colors.GRAY,
    marginBottom: scale(15),
  },
  input: {
    borderWidth: scale(1),
    borderColor: colors.MODERATE_PURPLE,
    borderRadius: scale(10),
    paddingVertical: scale(12),
    paddingHorizontal: scale(16),
    marginBottom: scale(15),
    fontSize: Size.fonts_16,
  },
  updateButton: {
    borderRadius: scale(14),
    borderColor:colors.MODERATE_PURPLE ,
    borderWidth: scale(1),
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(18),
    marginBottom: scale(15),
  },
  updateButtonText: {
    color: colors.BLACK,
    fontFamily:Fonts.MEDIUM
  },
  saveButton: {
    borderRadius: 40,
    backgroundColor: colors.PURPLE,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(18),
  },
  saveButtonText: {
    color: colors.LIGHT_YELLOW,
    fontSize: Size.fonts_20,
    fontFamily:Fonts.BOLD,
  },
});

export default ParentUpdate;
