import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Timer = ({ sessionStartTime }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(sessionStartTime));

  // Function to calculate time left in seconds
  function calculateTimeLeft(startTime) {
    const now = new Date().getTime(); // Current time in milliseconds
    const targetTime = new Date(startTime).getTime(); // Convert startTime to timestamp
    const difference = targetTime - now; // Difference in milliseconds

    return difference > 0 ? Math.floor(difference / 1000) : 0; // Convert to seconds
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTimeLeft = calculateTimeLeft(sessionStartTime); // Recalculate time left
        if (newTimeLeft <= 0) {
          clearInterval(interval); // Stop timer when session time is reached
          return 0;
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sessionStartTime]);

  // Format seconds into HH:MM:SS
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#43576E',
  },
});

export default Timer;
