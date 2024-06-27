import {useContext, useState, useEffect} from 'react';
import {Formik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import logo from '@src/assets/images/logo.png';
import {
  TouchableOpacity,
  View,
  TextInput,
  Text,
  ToastAndroid,
  KeyboardAvoidingView,
  Image,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native';
import {object, string} from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '@src/context/AuthContext';
import {axiosClient} from '@src/services/axiosClient';
import {styles} from './styles';
import {ROUTE} from '@src/navigation/constant';

export default function LoginForm() {
  const {login} = useContext(AuthContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();
  const userSchemaValidation = object({
    password: string()
      .min(8, 'password must have at least 8 characters')
      .required('password is required'),
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={{
            user: '',
            password: '',
          }}
          validationSchema={userSchemaValidation}
          onSubmit={async values => {
            try {
              console.log(values);
              const res = await axiosClient.post('/parent/login', {
                user: values.user,
                password: values.password,
              });
              console.log(res.data);
              if (res.data.result) {
                ToastAndroid.show(
                  'Login Successful',
                  ToastAndroid.TOP,
                  ToastAndroid.LONG,
                );
                setTimeout(() => {
                  login(res.data.result.accessToken);
                  navigation.navigate(ROUTE.UPDATE_PASSWORD);
                }, 2000);
              } else {
                ToastAndroid.show(
                  res.data.message,
                  ToastAndroid.LONG,
                  ToastAndroid.TOP,
                );
              }
            } catch (error) {}
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            resetForm,
          }) => {
            return (
              <View style={styles.formContainer}>
                <View style={styles.logoContainer}>
                  <Image source={logo} alt="" style={styles.logo} />
                  <Text style={styles.logoText}>LOGO</Text>
                </View>
                <View style={styles.infocontainer}>
                  <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeTextPrimary}>Welcome, </Text>
                    <Text style={styles.welcomeTextSecondary}>Login Here</Text>
                  </View>
                  {!isKeyboardVisible && (
                    <Text style={styles.description}>
                      Enter your credentials to get access to your account.
                    </Text>
                  )}
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>
                      Phone, email or username
                    </Text>
                    <TextInput
                      onChangeText={handleChange('user')}
                      onBlur={handleBlur('user')}
                      value={values.user}
                      style={styles.input}
                      placeholder="Email / Phone / Username"
                      placeholderTextColor={'black'}
                    />
                    {touched.user && errors.user && (
                      <Text style={styles.errorText}>{errors.user}</Text>
                    )}
                  </View>
                  <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <View style={styles.passwordInputContainer}>
                      <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        style={styles.passwordInput}
                        placeholder="Enter Your Password"
                        placeholderTextColor={'black'}
                        secureTextEntry={!isPasswordVisible}
                      />
                      <TouchableOpacity
                        style={styles.passwordVisibilityToggle}
                        onPress={handlePasswordVisibility}>
                        {isPasswordVisible ? (
                          <Icon name="eye" size={30} color="black" />
                        ) : (
                          <Icon name="eye-slash" size={30} color="black" />
                        )}
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forgotPasswordText}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleSubmit}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
