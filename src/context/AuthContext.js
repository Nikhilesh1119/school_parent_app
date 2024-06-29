// import React, {createContext, useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {jwtDecode} from 'jwt-decode';

// export const AuthContext = createContext();

// export const AuthProvider = ({children}) => {
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const isLogin = async () => {
//       try {
//         const token = await AsyncStorage.getItem('accessToken');
//         if (token) {
//           setAccessToken(token);
//         }
//       } catch (e) {
//         console.log('Login error', e);
//       }
//     };
//     isLogin();
//   }, []);

//   const login = async token => {
//     try {
//       await AsyncStorage.setItem('accessToken', token);
//       setAccessToken(token);
//       try {
//         // console.log(token);
//         // const decodedToken = jwtDecode(token);
//         // console.log('dtl', decodedToken);
//       } catch (error) {
//         console.error('Failed to decode token:', error);
//       }
//     } catch (e) {
//       console.error('Login error', e);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const logout = async () => {
//     try {
//       await AsyncStorage.removeItem('accessToken');
//       setAccessToken(null);
//     } catch (e) {
//       console.error('Logout error', e);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         login,
//         logout,
//         accessToken,
//       }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {axiosClient} from '../services/axiosClient';
import {useNavigation} from '@react-navigation/native';
import {ROUTE} from '../navigation/constant';
// import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(null);
  const [childrenData, setChildrenData] = useState([]);
  const [currentChild, setCurrentChild] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          setAccessToken(token);
          await fetchChildrenData();
        }
      } catch (e) {
        console.log('Login error', e);
      } finally {
        setIsLoading(false);
      }
    };
    isLogin();
  }, []);

  const fetchChildrenData = async () => {
    try {
      const res = await axiosClient.get('parent/children');
      const children = res.data.result;
      setChildrenData(children);
      if (children.length > 0) {
        setCurrentChild(children[0]);
      }
    } catch (e) {
      console.error('Fetch children data error', e);
    }
  };

  const login = async token => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem('accessToken', token);
      setAccessToken(token);
      await fetchChildrenData();
    } catch (e) {
      console.error('Login error', e);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    const navigation = useNavigation();
    try {
      await AsyncStorage.removeItem('accessToken');
      setAccessToken(null);
      setChildrenData([]);
      setCurrentChild(null);
      console.log('logout');
      navigation.navigate(ROUTE.LOGIN);
    } catch (e) {
      console.error('Logout error', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        accessToken,
        childrenData,
        currentChild,
        setCurrentChild,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
