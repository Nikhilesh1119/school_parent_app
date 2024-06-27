import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const isLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          setAccessToken(token);
        }
      } catch (e) {
        console.log('Login error', e);
      } finally {
        setIsLoading(false);
      }
    };
    isLogin();
  }, []);

  const login = async token => {
    try {
      await AsyncStorage.setItem('accessToken', token);
      setAccessToken(token);
      try {
        // console.log(token);
        // const decodedToken = jwtDecode(token);
        // console.log('dtl', decodedToken);
      } catch (error) {
        console.error('Failed to decode token:', error);
      }
    } catch (e) {
      console.error('Login error', e);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');
      setAccessToken(null);
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
      }}>
      {children}
    </AuthContext.Provider>
  );
};
