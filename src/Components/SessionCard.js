/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UnderlineTextButton from './UnderlineTextButton';
import SecondaryButton from './SecondaryButton';


export default function SessionCard({
  clientName,
  sessionStartTime,
  sessionEndTime,
  sessionMethod,
  sessionType, // e.g., "First", "New"
  onPress,
}) {
  const formatTime = (time) => time; // Keep API format

  // Normalize session method to match API values
  const getSessionColor = () => {
    const normalizedMethod = sessionMethod.toLowerCase().replaceAll(" ", ""); // Convert to lowercase & remove spaces
    switch (normalizedMethod) {
      case 'available':
        return '#118B50'; // Green
      case 'online':
        return '#3674B5'; // Blue
      case 'facetoface': // Matches 'Face To Face'
        return '#B82132'; // Red
      default:
        return '#999'; // Default gray
    }
  };

  return (
    <View style={styles.cardContainer}>
      {/* Left Colored Bar */}
      <View style={[styles.colorBar, { backgroundColor: getSessionColor() }]} />

      {/* Card Content */}
      <View style={styles.cardContent}>
        {/* Top Section: Client Name & Star Icon */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {sessionMethod === 'available' ? 'Available Time' : clientName}
          </Text>
          {sessionType?.toLowerCase() === "first" && (
            <MaterialCommunityIcons name="star" size={16} color="gold" />
          )}
        </View>

        {/* Time Slot */}
        <View style={styles.timeRow}>
          <MaterialCommunityIcons name="clock-outline" size={16} color="#43576E" />
          <Text style={styles.timeText}>{`${formatTime(sessionStartTime)} - ${formatTime(sessionEndTime)}`}</Text>
        </View>
      </View>

      {/* Right Button */}
      <View style={styles.buttonContainer}>
        {/* <UnderlineTextButton text={sessionMethod === 'available' ? 'ADD' : 'Details'} onPress={onPress} fontSize={14} /> */}
        <SecondaryButton text={sessionMethod === 'available' ? 'ADD' : 'Details'} onPress={onPress} fontSize={10} width={'65'} height={'30'} borderRadius={10} fontColor='black' ></SecondaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  colorBar: {
    width: 6,
    height: '100%',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  cardContent: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 5, // Space before the star icon
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  timeText: {
    fontSize: 14,
    color: '#43576E',
    marginLeft: 5,
    marginRight: 3,
  },
  buttonContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: '5%', // Adjust as needed
},
});

