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
import Backbutton from "@src/assets/images/Backbutton.png";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "@src/navigation/constant";
import styles from "./styles";
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



export default EditProfile;
