/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import gradient component

export default function PrimaryButton({
  isLoading = false,
  text,
  onPress,
  width = '100%',
  height = 50,
  borderRadius,
  fontSize = 16, // Default font size if not provided
}) {
  // Fallback to a default radius if no borderRadius prop is provided
  const radius = borderRadius !== undefined ? borderRadius : height / 2;

  return (
    <TouchableOpacity onPress={onPress} style={{ width, height, borderRadius: radius }}>
      <LinearGradient
        colors={['#1C90E9', '#43576E']} // Gradient colors
        start={[0, 0]} // Start of gradient
        end={[1, 0]} // End of gradient
        style={[styles.button, { width, height, borderRadius: radius }]}
      >
      {isLoading==true? <ActivityIndicator color={'white'} size={25}></ActivityIndicator>:
        <Text style={[styles.text, { fontSize }]}>{text}</Text>
      }
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
