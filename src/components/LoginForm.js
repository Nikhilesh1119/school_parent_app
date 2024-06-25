import React, { useState } from 'react';
import { Formik } from 'formik';
import { SafeAreaView, TouchableOpacity, View, TextInput, Text, StyleSheet } from 'react-native';
import { object, string } from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import {Size, Weight, Colors, Fonts} from '@src/theme/Fonts';
const useStyles = () => {
  return StyleSheet.create({
    container: {
      minHeight: '100%',
    },
    innerContainer: {
      paddingHorizontal: 20,
      backgroundColor: 'white',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
    },
    formContainer: {
      paddingHorizontal: 15,
      height: '100%',
    },
    headerContainer: {
      flexDirection: 'row',
      maxHeight: 48,
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 24,
      color: '#F97316', // Equivalent to 'text-orange-600'
      fontFamily: Fonts.BOLD
    },
    loginText: {
      fontSize: 24,
      color: 'black',
      fontFamily: Fonts.BOLD

    },
    label: {
      fontSize: 18,
      color: '#7b7c7b',
    },
    input: {
      borderColor: '#e5e7e6',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize: 16,
      color: 'black',
    },
    errorText: {
      color: '#DC2626', // Equivalent to 'text-red-600'
    },
    passwordContainer: {
      borderColor: '#e5e7e6',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
    },
    passwordInput: {
      borderRadius: 10,
      width: '83.33%', // Equivalent to 'w-5/6'
      paddingHorizontal: 16,
      fontSize: 16,
      color: 'black',
    },
    iconContainer: {
      height: 48,
      width: '16.67%', // Equivalent to 'w-1/6'
      justifyContent: 'center',
      alignItems: 'center',
    },
    forgotPasswordText: {
      color: '#1F2937', // Equivalent to 'text-gray-900'
      textAlign: 'right',
    },
    submitButton: {
      marginTop: 48,
      backgroundColor: '#6B21A8', // Equivalent to 'bg-purple-700'
      paddingVertical: 12,
      borderRadius: 25,
      alignItems: 'center',
    },
    submitButtonText: {
      fontSize: 18,
      color: 'white',
      fontWeight: '600',
    },
  });
};

const LoginForm = () => {
  const navigation = useNavigation();
  const styles = useStyles();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const userSchemaValidation = object({
    email: string().email('Invalid email').required('Email is required'),
    password: string()
      .min(4, 'password must have at least 4 characters')
      .max(8, 'password can have at most 8 characters')
      .required('password is required'),
  });

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={userSchemaValidation}
          onSubmit={values => {
            navigation.navigate('Home');
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.welcomeText}>Welcome, </Text>
                <Text style={styles.loginText}>Login Here</Text>
              </View>
              <View>
                <View>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={styles.input}
                    placeholder="abc@gmail.com"
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>
                <View style={{ marginTop: 16 }}>
                  <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordContainer}>
                      <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={styles.passwordInput}
                        placeholder="Enter Your Password"
                        secureTextEntry={!isPasswordVisible}
                      />
                      <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={handlePasswordVisibility}>
                        <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={22} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <TouchableOpacity style={{ marginTop: 8 }}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
