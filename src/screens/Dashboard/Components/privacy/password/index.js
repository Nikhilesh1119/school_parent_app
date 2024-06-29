import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TextInput,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Backbutton from '@src/assets/images/Backbutton.png';
import { styles } from './styles';

export default function ParentPassword() {
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
        <Image resizeMode="contain" source={{}} style={styles.image} />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter your old password"
          placeholderTextColor="gray"
        />
      </View>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <Image resizeMode="contain" source={{}} style={styles.image} />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter your new password"
          placeholderTextColor="gray"
        />
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1516a5c7390db32a20d0c78488a5fd606d5082c3b62f2c63a462aaea9134f028?apiKey=5571847fc48447bbad48faecb3b890d9&',
          }}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Confirm your new password"
          placeholderTextColor="gray"
        />
      </View>

      {/* Save Button */}
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </KeyboardAwareScrollView>
  );
}
