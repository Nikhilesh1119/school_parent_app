import React, { useContext, useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Switch,
  Image,
  Modal,
  FlatList,
  ImageBackground,
} from 'react-native';


import background from '@src/assets/images/background.png';
import contact from '@src/assets/images/contact.png';
import editprofile from '@src/assets/images/editprofile.png';
import laguage from '@src/assets/images/laguage.png';
import mode from '@src/assets/images/mode.png';
import help from '@src/assets/images/help.png';
import downarrow from '@src/assets/images/downarrow.png';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import { AuthContext } from '@src/context/AuthContext';

export default function ProfileScreen({ navigation }) {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
    language: 'English',
  });

  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [studentModalVisible, setStudentModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('John Doe');
  const {t} = useTranslation()
  
  const {childrenData} = useContext(AuthContext);
  const students = [
    { label: 'John Doe', value: 'John Doe' },
    { label: 'Jane Smith', value: 'Jane Smith' },
    { label: 'Sam Johnson', value: 'Sam Johnson' },
  ];

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  const handleLanguageSelect = (language) => {
    setForm({ ...form, language });
    setLanguageModalVisible(false);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setStudentModalVisible(false);
  };

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <ImageBackground
        source={background}
        resizeMode="stretch"
        style={styles.image}
      >
        <View style={styles.header}>
          <View style={styles.pickerContainer}>
            <TouchableOpacity
              onPress={() => setStudentModalVisible(true)}
              style={styles.pickerTouchable}
            >
              <Text style={styles.selectedStudent}>{selectedStudent}</Text>
              <Image source={downarrow} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profile}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>{t('profile.classnameAndSection')}</Text>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Preferences</Text> */}
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon, {}]}>
                  <Image
                    source={editprofile}
                    style={{ width: 22, height: 22 }}
                  />
                </View>
                <Text style={styles.rowLabel}>Edit profile</Text>
                <View style={styles.rowSpacer} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setLanguageModalVisible(true)}
                style={styles.row}
              >
                <View style={[styles.rowIcon, {}]}>
                  <Image
                    source={laguage}
                    style={{ width: 22, height: 22 }}
                  />
                </View>
                <Text style={styles.rowLabel}>Language</Text>
                <View style={styles.rowSpacer} />
                <Text style={styles.rowValue}>{form.language}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <View style={styles.row}>
                <View style={[styles.rowIcon]}>
                  <Image source={mode} style={{ width: 22, height: 22 }} />
                </View>
                <Text style={styles.rowLabel}>Dark Mode</Text>
                <View style={styles.rowSpacer} />
                <Switch
                  onValueChange={(darkMode) =>
                    setForm({ ...form, darkMode })
                  }
                  value={form.darkMode}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Notifications</Text> */}
          <View style={styles.sectionBody}>
            <View style={[styles.rowWrapper, styles.rowFirst]}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={help} style={{ width: 22, height: 22 }} />
                </View>
                <Text style={styles.rowLabel}>Help & Support</Text>
                <View style={styles.rowSpacer} />
                
              </TouchableOpacity>
            </View>

            <View style={styles.rowWrapper}>
              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}
                style={styles.row}
              >
                <View style={[styles.rowIcon]}>
                  <Image source={contact} style={{ width: 22, height: 22 }} />
                </View>
                <Text style={styles.rowLabel}>Contact Us</Text>
                <View style={styles.rowSpacer} />
                
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={languageModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Language</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleLanguageSelect(item)}
                  style={styles.languageOption}
                >
                  <Text style={styles.languageText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <Modal
        visible={studentModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setStudentModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select child</Text>
            <FlatList
              data={students}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => handleStudentSelect(item.value)}
                  style={styles.languageOption}
                >
                  <Text style={styles.languageText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

