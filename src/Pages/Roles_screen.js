/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import RolesBox from '../Components/RolesBox';

export default function Roles_screen({navigation}) {
  return (
    <View style={styles.screen}>
      {/* Header Image */}
      <Image
        source={require('../../assets/RolesImage.png')}
        style={styles.image}
      />

      {/* Description Text */}
      <Text style={styles.description}>
        Empower your practice, connect with clients, and streamline your workflow—all in one place.
      </Text>

      {/* Roles Boxes */}
      
      <RolesBox
        iconName="doctor"
        title="Login as a Therapist"
        description="Access your account as a therapist to manage sessions"
        onPress={() => navigation.navigate('Login')}
      />
      <RolesBox
        iconName="human-greeting-variant"
        title="Login as a Client"
        description="Access your profile, manage appointments"
      />
      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Reservation Link */}
      <TouchableOpacity>
        <Text style={styles.linkText}>Request a Reservation</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: "5%",
    backgroundColor: 'white',
  },
  image: {
    width: '160%',
    height: "40%",
    resizeMode: 'contain',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#9AA6B2',
    marginBottom: "8%",
    paddingHorizontal: "3%",
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: "5%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: "2%",
    fontSize: 14,
    color: '#9AA6B2',
  },
  linkText: {
    fontSize: 14,
    color: '#2A7CBE',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginTop :"2%"
  },
});
