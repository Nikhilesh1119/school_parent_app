import * as React from "react";
import { View,  Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function UpdatePassword() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>A</Text>
        </View>
        <Text style={styles.logoTitle}>LOGO</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Please update your details</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Create Username</Text>
          <TextInput style={styles.input} placeholder="Enter your username" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
          <TextInput style={styles.input} placeholder="Enter your new password" secureTextEntry />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder="Confirm your new password" secureTextEntry />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Password</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}

