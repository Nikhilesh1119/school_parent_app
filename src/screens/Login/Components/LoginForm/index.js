import React, { useState } from 'react';
import { Formik } from 'formik';
import { SafeAreaView, TouchableOpacity, View, TextInput, Text, StyleSheet } from 'react-native';
import { object, string } from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


import { ROUTE } from '@src/navigation/constant';

const LoginForm = () => {
  const navigation = useNavigation();
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
            navigation.navigate(ROUTE.TAB);
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
