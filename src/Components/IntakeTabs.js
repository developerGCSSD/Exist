/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function IntakeTabs({ title, isSelected, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
            {isSelected ? (
                <LinearGradient
                    colors={['#4A90E2', '#0F67B1']} // Gradient colors for selected tab
                    style={styles.selectedTab}
                >
                    <Text style={styles.selectedText}>{title || " "}</Text>
                </LinearGradient>
            ) : (
                <View style={styles.unselectedTab}>
                    <Text style={styles.unselectedText}>{title || " "}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  tabContainer: {
    marginHorizontal: "1%", 
  },
  selectedTab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 130,  
    height: 50,   
  },
  unselectedTab: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    width: 130,   
    height: 50,   
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
  unselectedText: {
    color: '#1F509A',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 10,
  },
});

