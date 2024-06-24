import * as React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Size } from "../theme/fonts";

function EditProfile() {
  const [name, setName] = React.useState("");
  const [rollNumber, setRollNumber] = React.useState("");
  const [classSection, setClassSection] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [address, setAddress] = React.useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <View style={styles.titleText}>
              <Text style={styles.headerText}>Edit profile</Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeader}>Name</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Mahi Sharma"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View>
            <Text style={styles.sectionHeader}>Roll Number</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Roll Number"
              value={rollNumber}
              onChangeText={setRollNumber}
            />
          </View>
          <View>
            <Text style={styles.sectionHeader}>Class and Section</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="8th- A"
              value={classSection}
              onChangeText={setClassSection}
            />
          </View>
          <View>
            <Text style={styles.sectionHeader}>Date of Birth</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="DD/MM/YYYY"
              value={dob}
              onChangeText={setDob}
            />
          </View>
          <View>
            <Text style={styles.sectionHeader}>Gender</Text>
          </View>
          <View style={styles.genderContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Female"
              value={gender}
              onChangeText={setGender}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionHeader}>Email</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="mahisharma@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text style={styles.sectionHeader}>Phone Number</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="+91 7489795305"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View>
            <Text style={styles.sectionHeader}>Blood Group</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="AB+"
              value={bloodGroup}
              onChangeText={setBloodGroup}
            />
          </View>
          <View>
            <Text style={styles.sectionHeader}>Address</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder="Rajendra Nagar, Indore"
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <Pressable style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 20,
    marginHorizontal: "auto",
    width: "100%",
    backgroundColor: "#FAFAFA",
    maxWidth: 480,
    borderRadius: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%",
    maxWidth: "sm:hidden",
  },
  time: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    color: "#27272a",
  },
  headerIcon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconBackground: {
    width: 24,
    height: 24,
    backgroundColor: "#27272a",
    borderRadius: 50,
  },
  headerImage: {
    flex: 1,
    aspectRatio: 1.15,
    width: 46,
  },
  section: {
    flexDirection: "column",
    paddingHorizontal: 16,
    marginTop: 10,
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
    color: "#000",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backIcon: {
    aspectRatio: 0.5,
    width: 9,
    borderColor: "#27272a",
    borderWidth: 1,
    fill: "#27272a",
  },
  titleText: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 130,
  },
  headerText: {
    fontSize: Size.font_22,
    color: "#000000",
    fontWeight: "700",
    top: 15,
  },
  sectionHeader: {
    marginTop: 32,
    fontSize: Size.font_22,
    color: "#000000",
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 16,
    lineHeight: 28,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderColor: "#7c3aed",
    borderWidth: 0.25,
    borderOpacity: 0.5,
    color: "#27272a",
    opacity: 0.6,
  },
  inputText: {
    flex: 1,
    color: "#0F061699",
    fontSize: Size.font_15,
    fontWeight: "700",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 10,
    marginTop: 32,
    fontSize: 14,
    lineHeight: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderColor: "#7c3aed",
    borderWidth: 0.25,
    borderOpacity: 0.5,
    color: "#27272a",
    opacity: 0.6,
  },
  genderText: {
    flex: 1,
    textAlign: "center",
  },
  dropdownIcon: {
    aspectRatio: 0.85,
    width: 18,
  },
  flexGrow: {
    flex: 1,
    textAlign: "center",
  },
  editIcon: {
    width: 24,
    aspectRatio: 1,
  },
  addIcon: {
    alignSelf: "flex-end",
    marginRight: 40,
    aspectRatio: 0.85,
    width: 18,
  },
  updateButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 64,
    paddingVertical: 16,
    marginTop: 40,
    backgroundColor: "#4E2973",
    borderRadius: 40,
    textAlign: "center",
    color: "#f5f5f",
  },
  updateButtonText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: Size.font_20,
  }
});

export default EditProfile;
