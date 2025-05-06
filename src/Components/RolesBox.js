/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import TherapistSvg from '../../assets/SVGs/therapist';
import ClientSvg from '../../assets/SVGs/client';

export default function RolesBox({ title, description, iconName, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {/* <MaterialCommunityIcons name={iconName} size={35} color="#2A7CBE" /> */}
        {title=="Login as a Therapist"? <TherapistSvg></TherapistSvg> : <ClientSvg></ClientSvg>}
        
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: "4%",
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginVertical: "2%",
  },
  iconContainer: {
    marginRight: "8%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom:"2%"
  },
  description: {
    fontSize: 10,
    color: '#9AA6B2',
  },
});
