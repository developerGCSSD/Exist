/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputFeild from '../Components/InputField';
import PrimaryButton from '../Components/PrimaryButton';
import Checkbox from '../Components/Checkbox';
import Spacer from '../Components/Spacer';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../Redux/Reducers/AuthReducer';
import { Snackbar } from 'react-native-paper';
import {login} from '../Redux/Reducers/AuthReducer'
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window');

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});


export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user?.user);
  const isLoading = useSelector((state) => state.user?.isLoading);
  const error = useSelector((state) => state.user?.error);
  const success = useSelector((state)=>state.user?.success)
  const isTherapist = useSelector((state) => state.user?.isTherapist);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const navigation = useNavigation()
  

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogin = async (values)=>{
  //   try {
  //     dispatch(loginThunk({"userName": values.username, "password": values.password})).then(() => {
  //       if(success){
  //         console.log("login done ###############");
  //         navigation.navigate("Home");
  //         dispatch(login());
  //       }
  //     })
  //   } catch (error) {
  //     setSnackBarMessage('Login failed. Please try again!');
  //     setShowSnackBar(true);
  //     console.log("Error:", error);
  //   }
  // }
  const handleLogin = async (values) => {
    try {
      const result = await dispatch(
        loginThunk({ userName: values.username, password: values.password })
      ).unwrap(); // Unwraps the resolved/rejected result of the thunk
      
      console.log("Login successful:", result);
      navigation.navigate("Home");
      dispatch(login(result.token)); // Pass token from API to `login` action
    } catch (error) {
      console.error("Login failed:", error);
      setSnackBarMessage("Login failed. Please try again!");
      setShowSnackBar(true);
    }
  };
  useEffect(() => {
    if (error) {
      setSnackBarMessage("Login failed. Please try again!");
      setShowSnackBar(true);
    }
  }, [error]);

  // useEffect(()=>{
  //   if(error){
  //     console.log("errorrrrrr", error)
  //     setSnackBarMessage('Login failed. Please try again!');
  //     setShowSnackBar(true);
  //     console.log(showSnackBar)
  //   }
  // }, [error])
 

  return (
    
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.rootContainer}>
        {/* Top Container with Linear Gradient */}
        <LinearGradient
          colors={['#1C90E9', '#43576E']} // Gradient colors
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.topContainer}
        >
          <View style={styles.logoContainer}>
            <Image
              // eslint-disable-next-line no-undef
              source={require('../../assets/existLogo.png')}
              style={styles.logo}
            />
          </View>
        </LinearGradient>

        {/* Bottom Container */}

        <View style={styles.bottomContainer}>
          <Formik
            initialValues={{ username: '', password: '', rememberMe: false }}
            validationSchema={validationSchema}
            onSubmit={handleLogin} // Submit login handler
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <View style={styles.formContainer}>
                <Text style={styles.title}>Hi there!</Text>
                <Text style={styles.subtitle}>
                  Welcome Back, Please enter your details
                </Text>

                {/* Username Input */}
                <InputFeild
                  placeholder="Enter your User name"
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                {touched.username && errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}

                {/* Spacer */}
                <Spacer height={'4%'} />

                {/* Password Input */}
                <InputFeild
                  placeholder="Enter your Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={!showPassword}
                  togglePasswordVisibility={togglePasswordVisibility}
                  showPassword={showPassword}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                {/* Spacer */}
                <Spacer height={'5%'} />

                {/* Remember Me & Forgot Password */}
                <View style={styles.row}>
                  <View style={styles.rememberMeContainer}>
                    <Checkbox
                      checked={values.rememberMe}
                      onPress={() =>
                        setFieldValue('rememberMe', !values.rememberMe)
                      }
                    />
                    <Text style={styles.rememberMeText}>Remember me</Text>
                  </View>

                  <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>

                {/* Spacer */}
                <Spacer height={'5%'} />

                {/* Display API Error Message */}
                {/* {errorMessage && (
                  <Text style={styles.errorMessage}>{errorMessage}</Text>
                )} */}

                {/* Login Button */}
                <PrimaryButton
                isLoading={isLoading}
                  text={'Login'}
                  onPress={handleSubmit}
                  width={'100%'}
                  borderRadius={5}
                  disabled={isLoading}
                />

                {/* Spacer */}
                <Spacer height={'5%'} />

                {/* Footer */}
                <View style={styles.footer}>
                  <Text style={styles.footerText}>Don't have an account? </Text>
                  <Text style={styles.createAccountText}>Create account</Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
      {/* Snackbar */}
      <Snackbar
  style={{ backgroundColor: '#D84040' }}  // Dark red background
  visible={showSnackBar}
  onDismiss={() => setShowSnackBar(false)}
  action={{
    label: 'Close',
    onPress: () => {
      setShowSnackBar(false);
    },
    labelStyle: { color: 'white' }
  }}
>
  <Text style={{ color: 'white' }}>{snackBarMessage}</Text> 
</Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1, // Allows ScrollView to adjust content properly
  },
  topContainer: {
    height: height * 0.4, // 40% of the screen
    // borderBottomRightRadius: 105,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C90E9'
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 230,
    height: 150,
    resizeMode: 'contain',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -35, //* Overlap the top container
    borderTopLeftRadius: 40,
    borderTopRightRadius:40,
    padding: '8%',
  },
  formContainer: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '2%',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#9AA6B2',
    marginBottom: '8%',
    textAlign: 'left',
    fontStyle: 'italic',
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    marginTop: "2%",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
    marginBottom: '6%',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    fontSize: 14,
    color: '#9AA6B2',
    marginLeft: 8,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#2A7CBE',
    textDecorationLine: 'underline',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#9AA6B2',
  },
  createAccountText: {
    fontSize: 14,
    color: '#2A7CBE',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
});
