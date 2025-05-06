/* eslint-disable react/prop-types */
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function IntakeContainer({ clientId }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate("IntakeInfo", { clientId })}
    >
      <Text style={styles.text}>Intake Information</Text>
      <MaterialCommunityIcons name="chevron-right" size={20} color="#888" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: '5%',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
});
