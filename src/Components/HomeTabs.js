/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const HomeTab = ({ title, iconName, isSelected, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
    {isSelected ? (
      <LinearGradient
        colors={['#4A90E2', '#0F67B1']} //^ Gradient colors for selected tab
        style={styles.selectedTab}
      >
        <MaterialIcons name={iconName} size={20} color="#FFFFFF" />
        <Text style={styles.selectedText}>{title || " "}</Text>
      </LinearGradient>
    ) : (
      <View style={styles.unselectedTab}>
        <MaterialIcons name={iconName} size={20} color="#1F509A" />
        <Text style={styles.unselectedText}>{title || " "}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    tabContainer: {
      marginHorizontal: "1.5%", //^ Space between tabs
    },
    selectedTab: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: 100,  
      height: 65,   
    },
    unselectedTab: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F5',
      borderRadius: 10,
      width: 100,   
      height: 65,   
    },
    selectedText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginTop: 5,
      textAlign: 'center',
      fontSize: 10,
    },
    unselectedText: {
      color: '#1F509A',
      fontWeight: 'bold',
      marginTop: 5,
      textAlign: 'center',
      fontSize: 10,
    },
  });
  

export default HomeTab;
