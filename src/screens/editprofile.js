import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
  Button,
} from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import { scale } from 'react-native-size-matters';
import Backbutton from "@src/assets/images/Backbutton.png";
import colors from "@src/theme/colors";
import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../navigation/constant";
function EditProfile() {
  const navigation=useNavigation()
  return (
    <Formik
      initialValues={{
        name: "",
        rollNumber: "",
        classSection: "",
        dob: "",
        gender: "",
        email: "",
        phoneNumber: "",
        bloodGroup: "",
        address: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.section}>
              <View style={styles.titleContainer}>
                
              <Pressable onPress={() => navigation.navigate(ROUTE.PROFILE)}>
                  <Image source={Backbutton} style={styles.backIcon} />
                </Pressable>
              
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
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
              </View>
              <View>
                <Text style={styles.sectionHeader}>Roll Number</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Roll Number"
                  value={values.rollNumber}
                  onChangeText={handleChange("rollNumber")}
                  onBlur={handleBlur("rollNumber")}
                />
              </View>
              <View>
                <Text style={styles.sectionHeader}>Class and Section</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="8th- A"
                  value={values.classSection}
                  onChangeText={handleChange("classSection")}
                  onBlur={handleBlur("classSection")}
                />
              </View>
              <View>
                <Text style={styles.sectionHeader}>Date of Birth</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="DD/MM/YYYY"
                  value={values.dob}
                  onChangeText={handleChange("dob")}
                  onBlur={handleBlur("dob")}
                />
              </View>
              <View>
                <Text style={styles.sectionHeader}>Gender</Text>
              </View>
              <View style={styles.genderContainer}>
                <Picker
                  selectedValue={values.gender}
                  onValueChange={(itemValue) => setFieldValue("gender", itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select Gender" value="" />
                  <Picker.Item label="Male" value="male" />
                  <Picker.Item label="Female" value="female" />
                  <Picker.Item label="Other" value="other" />
                </Picker>
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
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
              </View>
              <View>
                <Text style={styles.sectionHeader}>Phone Number</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="+91 7489795305"
                  value={values.phoneNumber}
                  onChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
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
                  value={values.bloodGroup}
                  onChangeText={handleChange("bloodGroup")}
                  onBlur={handleBlur("bloodGroup")}
                />
              </View>
              <View>
                <Text style={styles.sectionHeader}>Address</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Rajendra Nagar, Indore"
                  value={values.address}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                />
              </View>
              <Pressable style={styles.updateButton} onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.updateButtonText}>Update Profile</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: scale(20),
    marginHorizontal: "auto",
    width: "100%",
    backgroundColor: colors.OFF_WHITE,
    maxWidth: scale(480),
    borderRadius: scale(32),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(16),
    width: "100%",
    
   
  },
  section: {
    flexDirection: "column",
    paddingHorizontal: scale(16),
    marginTop: scale(10),
    width: "100%",
    fontSize: scale(24),
    fontFamily: Fonts.BOLD,
    lineHeight: scale(28),
    color: colors.BLACK,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(10),
    marginTop:scale(15)
  },
  backIcon: {
    width: scale(25),
    height: scale(25),
    marginRight: scale(10),
    
  },
  titleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  headerText: {
    fontSize: Size.font_22,
    color: colors.BLACK,
    fontFamily: Fonts.BOLD,
  },
  sectionHeader: {
    marginTop: scale(32),
    fontSize: Size.font_22,
    color: colors.BLACK,
    fontFamily: Fonts.MEDIUM,
  },
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    marginTop: scale(20),
    fontSize: scale(16),
    lineHeight: scale(28),
    backgroundColor: colors.WHITE,
    borderRadius: scale(16),
    borderWidth: scale(0.25),
    borderOpacity: 0.5,
    opacity: 0.6,
  },
  inputText: {
    flex: 1,
    fontSize: Size.font_15,
    fontFamily: Fonts.MEDIUM,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(32),
    paddingVertical: scale(10),
    marginTop: scale(32),
    fontSize: scale(14),
    lineHeight: scale(20),
    borderRadius: scale(16),
    borderWidth: scale(0.25),
    borderOpacity: 0.5,
    opacity: 0.6,
  },
  picker: {
    flex: 1,
  },
  genderText: {
    flex: 1,
    textAlign: "center",
  },
  dropdownIcon: {
    aspectRatio: 0.85,
    width: scale(18),
  },
  flexGrow: {
    flex: 1,
    textAlign: "center",
  },
  editIcon: {
    width: scale(24),
    aspectRatio: 1,
  },
  addIcon: {
    alignSelf: "flex-end",
    marginRight: scale(40),
    aspectRatio: 0.85,
    width: scale(18),
  },
  updateButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: scale(40),
    paddingVertical: scale(10),
    marginTop: scale(40),
    backgroundColor: colors.PURPLE,
    borderRadius: scale(40),
    textAlign: "center",
  },
  updateButtonText: {
    color: colors.WHITE,
    fontFamily: Fonts.BOLD,
    fontSize: Size.font_20,
  }
});

export default EditProfile;
