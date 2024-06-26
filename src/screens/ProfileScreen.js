import React, { useState } from 'react';
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
import colors from '@src/theme/colors';
import { useTranslation } from 'react-i18next';
import {Size, Weight, Colors, Fonts} from '@src/theme/fonts';
import { scale } from 'react-native-size-matters';

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

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    flex: 0.5,
  },
  header: {
    paddingLeft: scale(24),
    paddingRight: scale(24),
    marginBottom: scale(12),
    marginTop: scale(20),
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(100),
  },
  pickerTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    padding: scale(10),
    borderBottomWidth: scale(1),
  },
  selectedStudent: {
    color: colors.WHITE,
    fontSize: Size.font_18,
    marginRight: scale(10),
    fontFamily: Fonts.BOLD,
  },
 
  profile: {
    alignItems: 'center',
    marginTop: scale(30),
    marginBottom: scale(35),
    position: 'absolute',
    top: '25%', // Adjust the position to move the avatar up
    left: '8%',
    zIndex: 2,
  },
  profileAvatar: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(100),
  },
  profileName: {
    marginTop: scale(15),
    fontSize: Size.font_24,
    fontWeight: Weight.full,
    fontFamily: Fonts.BOLD,
    color: Colors.BLACK,
    borderRadius: scale(8),

  },
  
  scrollViewContent: {
    position: 'absolute', 
    top: scale(80),
    width: '100%',
  },
  section: {
    paddingTop: scale(10),
  },
 
  sectionBody: {
    paddingLeft: scale(20),
    backgroundColor: colors.WHITE,
    borderTopWidth: scale(1),
    borderBottomWidth: scale(1),
    borderColor: colors.WHITE,
    borderRadius: scale(20),
    marginLeft: scale(15),
    marginRight: scale(15),
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.8,
    shadowRadius: scale(3),
    elevation: 5,
    marginBottom: scale(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: scale(16),
    height: scale(40),
  },
  rowWrapper: {
    borderTopWidth: scale(1),
    borderColor: colors.WHITE,
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowIcon: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(12),
  },
  rowLabel: {
    fontSize: Size.font_14,
    fontFamily:Fonts.MEDIUM,
    color: colors.BLACK,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: Size.font_14,
    fontFamily: Fonts.MEDIUM,
    color: colors.PURPLE,
    marginRight: scale(4),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align items to the bottom
    alignItems: 'center',
    
  },
  modalContent: {
    width: '100%',
    padding: scale(20),
    backgroundColor: colors.WHITE,
    borderTopLeftRadius: scale(16),
    borderTopRightRadius: scale(16),
    elevation: 5,
  },
  modalTitle: {
    fontSize: scale(20),
    fontWeight: '600',
    marginBottom: scale(10),
    textAlign: 'center',
    color: colors.BLACK,
  },
  languageOption: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
  },
  languageText: {
    fontSize: Size.font_16,
    color: colors.PURPLE,
    fontFamily:Fonts.BOLD,

  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: scale(18),
    paddingVertical: scale(8),
    paddingHorizontal: scale(10),
    borderWidth: scale(1),
    borderColor: colors.LIGHT_GRAY,
    borderRadius: scale(4),
    color: colors.WHITE,
    paddingRight: scale(30), // Ensure the text is never behind the icon
    width: scale(200), // Adjust the width of the picker
  },
  inputAndroid: {
    fontSize: scale(18),
    paddingHorizontal: scale(10),
    paddingVertical: scale(8),
    borderWidth: scale(0.5),
    borderRadius: scale(8),
    color: colors.WHITE,
    paddingRight: scale(15), // Ensure the text is never behind the icon
    width: scale(150), // Adjust the width of the picker
  },
  iconContainer: {
    top: scale(12),
    right: scale(12),
  },
});
