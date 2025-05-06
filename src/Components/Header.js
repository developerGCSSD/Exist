/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ 
  title = '', 
  leftIcon, 
  onLeftPress, 
  rightIcon, 
  onRightPress, 
  gradientColors = ['#4A90E2', '#0F67B1'] 
}) => {
  const isCentered = !leftIcon && !rightIcon; // Check if both icons are absent

  return (
    <LinearGradient colors={gradientColors} style={styles.headerContainer}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftPress} style={styles.iconContainer}>
          <MaterialIcons name={leftIcon} size={22} color="#FFFFFF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      <View style={[styles.centerContainer, isCentered && styles.centerAligned]}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
          <MaterialIcons name={rightIcon} size={22} color="#FFFFFF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: '12%',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  centerAligned: {
    alignItems: 'center',
    marginLeft: 0, // Remove any additional offset when icons are absent
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  iconContainer: {
    padding: 15,
    marginTop: '5%',
  },
  placeholder: {
    width: 50, // Space to maintain layout consistency when icons are absent
  },
});

export default Header;
