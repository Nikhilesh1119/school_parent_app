import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Backbutton from '@src/assets/images/Backbutton.png';
import Path2 from '@src/assets/images/Path2.png';
import Email from '@src/assets/images/Email.png';
import India from '@src/assets/images/India.png';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '@src/navigation/constant';
import { styles } from './styles';


function ParentUpdate() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();
  const handleEmailChange = text => {
    setEmail(text);
  };

  const handlePhoneNumberChange = text => {
    setPhoneNumber(text);
  };

  return (
    <View style={styles.container}>
      {/* Privacy and Security Section */}
      <View style={styles.section}>
        <Image resizeMode="contain" source={Backbutton} style={styles.image} />
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
            placeholderTextColor={'gray'}
            keyboardType="email-address"
          />
          <Image resizeMode="contain" source={Email} style={styles.inputIcon} />
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
            placeholderTextColor={'gray'}
            keyboardType="phone-pad"
          />
          <Image resizeMode="contain" source={India} style={styles.inputIcon} />
        </View>
      </View>

      {/* Change Password Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Change Password</Text>
        <Text style={styles.description}>Update your password here</Text>
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => navigation.navigate(ROUTE.PARENT_PRIVACY)}>
          <Text style={styles.updateButtonText}>Tap to update</Text>
          <Image
            resizeMode="contain"
            source={Path2}
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Save Button */}
      <Pressable style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </Pressable>
    </View>
  );
}

export default ParentUpdate;
