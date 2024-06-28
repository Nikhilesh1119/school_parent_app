import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable, TextInput } from "react-native";
import Backbutton from '../assets/images/Backbutton.png';

import colors from '@src/theme/colors';
import { Size, Weight, Colors, Fonts } from '@src/theme/fonts';
import { scale } from 'react-native-size-matters';
export default function ParentPassword() {
  return (
    <View style={styles.container}>
      {/* Privacy and Security Section */}
      <View style={styles.section}>
      <Image
          resizeMode="contain"
          source={Backbutton}
          style={styles.image}
        />
        <View style={styles.sectionTitle}>
          <Text style={styles.titleText}>Privacy and Security</Text>
          <Text style={styles.subtitleText}>Change Password</Text>
        </View>
      </View>

      {/* Old Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Old Password</Text>
        <Image
          resizeMode="contain"
          source={{
          }}
          style={styles.image}
        />
        <TextInput style={styles.input} secureTextEntry placeholder="Enter your old password" />
      </View>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <Image
          resizeMode="contain"
          source={{
          }}
          style={styles.image}
        />
        <TextInput style={styles.input} secureTextEntry placeholder="Enter your new password" />
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/1516a5c7390db32a20d0c78488a5fd606d5082c3b62f2c63a462aaea9134f028?apiKey=5571847fc48447bbad48faecb3b890d9&",
          }}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Confirm your new password"
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
    backgroundColor: "#FAFAFA",
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
    top:scale(-18)
  },
  sectionTitle: {
    flex: 1,
  },
  titleText: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft:45,
    color:colors.BLACK
  },
  subtitleText: {
    fontSize: 20,
    fontFamily:Fonts.BOLD,
    marginTop: 20,
    marginLeft:60,
    color:colors.BLACK
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    marginTop:10,
    marginBottom:-10
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  saveButton: {
    borderRadius: 40,
    backgroundColor: "#4E2973",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    marginTop:20
  },
  saveButtonText: {
    color: "#FFFFF0",
    fontSize: 18,
    fontWeight: "900",
  },
});

