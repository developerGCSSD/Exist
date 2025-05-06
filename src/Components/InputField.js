import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import eye icons from expo-vector-icons

export default function InputFeild({ placeholder, value, onChangeText, onBlur, secureTextEntry, togglePasswordVisibility, showPassword }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry} // Controlled by showPassword state
      />
      {togglePasswordVisibility && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
          <Ionicons
            name={showPassword ? 'eye' : 'eye-off'} // Toggle between eye and eye-off
            size={24}
            color="#999"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Allow absolute positioning of the icon
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: '5%',
    fontSize: 16,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: '5%',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
