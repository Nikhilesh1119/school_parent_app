import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
  Platform,
  Alert,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Backbutton from '@src/assets/images/Backbutton.png';
import Eye from '@src/assets/images/Eye.png';
import openEye from '@src/assets/images/openEye.png';
import { styles } from './styles';

export default function ParentPassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleNewPasswordChange = (password) => {
    setNewPassword(password);
    if (password === oldPassword) {
      setNewPasswordError("New password cannot be the same as the old password.");
    } else if (!passwordRegex.test(password)) {
      const missingRequirements = [];
      if (!/(?=.*[A-Z])/.test(password)) missingRequirements.push('one uppercase letter');
      if (!/(?=.*\d)/.test(password)) missingRequirements.push('one number');
      if (!/(?=.*[@$!%*?&])/.test(password)) missingRequirements.push('one special character');
      if (password.length < 8) missingRequirements.push('at least 8 characters');
      setNewPasswordError(`Password must include ${missingRequirements.join(', ')}.`);
    } else {
      setNewPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('New password and confirm password do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (password) => {
    setConfirmPassword(password);
    if (password !== newPassword) {
      setConfirmPasswordError('New password and confirm password do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSave = () => {
    if (newPasswordError || confirmPasswordError) {
      return;
    }

    if (!passwordRegex.test(newPassword)) {
      const missingRequirements = [];
      if (!/(?=.*[A-Z])/.test(newPassword)) missingRequirements.push('one uppercase letter');
      if (!/(?=.*\d)/.test(newPassword)) missingRequirements.push('one number');
      if (!/(?=.*[@$!%*?&])/.test(newPassword)) missingRequirements.push('one special character');
      if (newPassword.length < 8) missingRequirements.push('at least 8 characters');
      setNewPasswordError(`Password must include ${missingRequirements.join(', ')}.`);
      return;
    }

    Alert.alert("Success", "Password changed successfully!");
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollView}
      enableOnAndroid={true}
      extraScrollHeight={0}>
      {/* Privacy and Security Section */}
      <View style={styles.section}>
        <Image resizeMode="contain" source={Backbutton} style={styles.image} />
        <View style={styles.sectionTitle}>
          <Text style={styles.titleText}>Privacy and Security</Text>
          <Text style={styles.subtitleText}>Change Password</Text>
        </View>
      </View>

      {/* Old Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Old Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showOldPassword}
            placeholder="Enter your old password"
            placeholderTextColor="gray"
            value={oldPassword}
            onChangeText={setOldPassword}
          />
          <Pressable
            onPress={() => setShowOldPassword(!showOldPassword)}
            style={showOldPassword && styles.activeEyeIcon}>
            <Image resizeMode="contain" source={Eye} style={styles.eyeIcon} />
          </Pressable>
        </View>
      </View>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showNewPassword}
            placeholder="Enter your new password"
            placeholderTextColor="gray"
            value={newPassword}
            onChangeText={handleNewPasswordChange}
          />
          <Pressable
            onPress={() => setShowNewPassword(!showNewPassword)}
            style={showNewPassword && styles.activeEyeIcon}>
            <Image resizeMode="contain" source={Eye} style={styles.eyeIcon} />
          </Pressable>
        </View>
        {newPasswordError ? (
          <Text style={styles.errorMessage}>{newPasswordError}</Text>
        ) : null}
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!showConfirmPassword}
            placeholder="Confirm your new password"
            placeholderTextColor="gray"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
          />
          <Pressable
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={showConfirmPassword && styles.activeEyeIcon}>
            <Image resizeMode="contain" source={Eye} style={styles.eyeIcon} />
          </Pressable>
        </View>
        {confirmPasswordError ? (
          <Text style={styles.errorMessage}>{confirmPasswordError}</Text>
        ) : null}
      </View>

      {/* Save Button */}
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </KeyboardAwareScrollView>
  );
}
