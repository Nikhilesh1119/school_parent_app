import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Calendar from "../components/Calendar"

const Eventholiday = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOutsidePress = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <ScrollView>
            <View>
              <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, margin: 16, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8 }}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#8669a2' }}>Event Calendar</Text>
                  <Text style={{ fontSize: 18, color: '#8669a2' }}>31 May, 2024</Text>
                </View>
                <Calendar />
              </View>
              <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8, margin: 16, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 8 }}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#8669a2' }}>Events and Holidays</Text>
                  <Text style={{ fontSize: 18, color: '#8669a2' }}>Month name</Text>
                  <View style={{ backgroundColor: 'white', borderRadius: 8, margin: 5, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, paddingBottom: 200, paddingTop: 200 }}>
                    <Text style={{ fontSize: 18, color: '#8669a2', marginLeft: 10 }}>No holidays and Events this month</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>

        {/* Sidebar Icon */}
        <TouchableOpacity
          style={{ position: 'absolute', top: 25, right: 25, padding: 12, backgroundColor: '#9d82b7', borderRadius: 4, zIndex: 100 }}
          onPress={() => setIsSidebarVisible(!isSidebarVisible)}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>≡</Text>
        </TouchableOpacity>

        {/* Sidebar */}
        {isSidebarVisible && (
          <TouchableWithoutFeedback onPress={() => setIsSidebarVisible(false)}>
            <View style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 256, backgroundColor: '#f0f0f0', borderLeftWidth: 1, borderLeftColor: 'gray', padding: 20, zIndex: 50 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/50' }} // Replace with the actual profile image URL
                  style={{ width: 48, height: 48, borderRadius: 24, marginRight: 16 }}
                />
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#472966' }}>John Doe</Text>
              </View>
              <TouchableOpacity style={{ paddingVertical: 8 }}>
                <Text style={{ fontSize: 18, color: '#714f92' }}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingVertical: 8 }}>
                <Text style={{ fontSize: 18, color: '#714f92' }}>Privacy and Security</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingVertical: 8 }}>
                <Text style={{ fontSize: 18, color: '#714f92' }}>Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default Eventholiday;
