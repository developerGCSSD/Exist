/* eslint-disable react/prop-types */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

export default function SecondaryButton({
  isLoading = false,
  text,
  onPress,
  width = '100%',
  height = 50,
  borderRadius,
  fontSize = 16, 
  fontColor = '#333', // Default font color
  backgroundColor = '#D9EAFD', // Default background color
}) {
  const radius = borderRadius !== undefined ? borderRadius : height / 2;

  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { width, height, borderRadius: radius, backgroundColor }]}
    >
      {isLoading ? (
        <ActivityIndicator color={fontColor} size={25} />
      ) : (
        <Text style={[styles.text, { fontSize, color: fontColor }]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});
