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
import Calendar from "../components/Calendar";

const Eventholiday = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleOutsidePress = () => {
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#0F0616', fontFamily: 'Satoshi', marginBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0F0616', paddingLeft: 5, marginTop: -2, fontFamily: 'Satoshi', top: '46px' }}>Calendar</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#4E297380', marginTop: 2, paddingLeft: 5 }}>Key dates & Occassions</Text>
        </View>
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <ScrollView>
            <View style={{height:'100%'}}>
              <View style={{ paddingTop: 20, paddingLeft: 2, paddingRight: 2, backgroundColor: '#f5f0fb', borderRadius: 30, margin: 16, shadowColor: 'black', shadowOpacity: 0.2, shadowRadius: 10, elevation: 8 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4E2973', paddingLeft: 10 }}>June</Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#4E297380' }}>, 2024</Text>
                </View>
                <View style={{ marginBottom: 2 }}>
                  <Calendar />
                </View>
              </View>

              {/* Holidays and Events Section */}
              <View style={{ flexDirection: 'column', padding: 16, backgroundColor: 'white', borderRadius: 20, maxWidth: 500, height: 300 }}>
                <ScrollView>
                  
                    <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#0F0616', paddingLeft:16 }}>Holidays and Events</Text>
                    <Text style={{ marginTop: 0, fontWeight: 'bold',  color: '#64748b',paddingLeft:16,fontSize:18 }} >3 May 2024, Friday</Text>
                  
                  <View style={{ height: 1, marginTop: 14, backgroundColor: '#c084fc', opacity: 0.2 }} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 20, marginTop: 16, backgroundColor: '#fef2f2', borderRadius: 20, borderColor: '#ef4444', borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', color: '#D91111' }}>
                      <View style={{ width: 10, height: 10, borderRadius: 5, borderColor: '#D91111', borderWidth: 3 }} />
                      <Text style={{ marginLeft: 8, color: '#D91111', fontWeight: 'bold' }}>HOLI</Text>
                    </View>
                    <View style={{ justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#D91111', borderRadius: 10 }}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Holiday</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 20, marginTop: 8, backgroundColor: '#f3e8ff', borderRadius: 20, borderColor: '#4E2973', borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', color: '#8b5cf6' }}>
                      <View style={{ width: 10, height: 10, borderRadius: 5, borderColor: '#4E2973', borderWidth: 3}} />
                      <Text style={{ marginLeft: 8, color: '#4E2973', fontWeight: 'bold' }}>HOLI</Text>
                    </View>
                    <View style={{ justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#4E2973', borderRadius: 10 }}>
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Occasion</Text>
                    </View>
                  </View>
                  {/* Add more event/holiday items here */}
                </ScrollView>
              </View>
              {/* End of Holidays and Events Section */}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>

        {/* Sidebar Icon */}
        <TouchableOpacity
          style={{ position: 'absolute', top: 16, right: 16, marginTop: -3, borderRadius: 4, zIndex: 10 }}
          onPress={() => setIsSidebarVisible(!isSidebarVisible)}
        >
          <Text style={{ color: '#091247', fontSize: 40 }}>≡</Text>
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
