import * as React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Backbutton from '@src/assets/images/Backbutton.png';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '@src/navigation/constant';
import { styles } from './styles';

function ParentEdit() {
  const [gender, setGender] = React.useState('Female');
  const navigation = useNavigation();

  const handleUpdate = () => {
    console.log('up')
    navigation.navigate(ROUTE.TAB);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => alert('Go back')}>
          <Image
            resizeMode="contain"
            source={Backbutton}
            style={styles.backButton}
          />
        </Pressable>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          placeholderTextColor={'gray'}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          <Picker
            selectedValue={gender}
            style={styles.genderPicker}
            onValueChange={itemValue => setGender(itemValue)}>
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Qualification</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your qualification"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Occupation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your occupation"
          placeholderTextColor={'gray'}
        />
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={() => navigation.navigate(ROUTE.TAB)}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default ParentEdit;
