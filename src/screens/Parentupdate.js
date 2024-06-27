import * as React from "react";
import { View, StyleSheet, Image, Text, TextInput, Pressable } from "react-native";

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
    marginTop: 30,
    paddingHorizontal: 16,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 40,
    marginBottom:20
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputContainer: {
    marginBottom: 20,
    color: "#FFFFF0",
  },
  label: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "rgba(15, 6, 22, 0.7)",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(78, 41, 115, 0.5)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 15,
    fontSize: 16,
  },
  updateButton: {
    borderRadius: 14,
    borderColor: "rgba(78, 41, 115, 0.5)",
    borderWidth: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    marginBottom: 15,
  },
  updateButtonText: {
    color: "#0F0616",
    fontWeight: "700",
  },
  saveButton: {
    borderRadius: 40,
    backgroundColor: "#4E2973",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
  },
  saveButtonText: {
    color: "#FFFFF0",
    fontSize: 18,
    fontWeight: "900",
  },
});

export default ParentUpdate;
