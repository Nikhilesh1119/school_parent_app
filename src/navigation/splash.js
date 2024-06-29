// import React, {useContext, useEffect} from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {ROUTE} from '@src/navigation/constant';
// import {AuthContext} from '@src/context/AuthContext';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Splash() {
//   const navigation = useNavigation();
//   const {accessToken} = useContext(AuthContext);
//   // console.log(accessToken);

//   useEffect(() => {
//     if (accessToken === null) {
//       // if (false) {
//       navigation.replace(ROUTE.AUTH);
//     } else {
//       navigation.replace(ROUTE.TAB);
//     }
//   }, []);

//   return <></>;
// }

import React, {useContext, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '@src/navigation/constant';
import {AuthContext} from '@src/context/AuthContext';

export default function Splash() {
  const navigation = useNavigation();
  const {accessToken} = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (accessToken) {
        navigation.replace(ROUTE.TAB);
      } else {
        navigation.replace(ROUTE.AUTH);
      }
    }, 1000); // Adding a delay to simulate loading

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [accessToken, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
