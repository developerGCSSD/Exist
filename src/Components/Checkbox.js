import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = ({ checked = false, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}  // Trigger onPress to handle the state change
      activeOpacity={0.8}
    >
      <View style={[styles.box, checked && styles.checkedBox]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: 18,  // Fixed width for the checkbox
    height: 18,
    borderWidth: 2,
    borderColor: '#9AA6B2',  // Light border color
    borderRadius: 4,
  },
  checkedBox: {
    backgroundColor: '#2A7CBE',  // Blue color when checked
    borderColor: '#2A7CBE',  // Border color matches the background when checked
  },
});

export default Checkbox;
