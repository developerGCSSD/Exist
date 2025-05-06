/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet } from "react-native";
import TextRow from "./TextRow"; // Import the reusable TextRow component
import Spacer from "./Spacer";

export default function EmergencyAndFamily({ emergencyData, familyData }) {
  return (
    <View style={styles.container}>
      {emergencyData?.map((item, index) => (
        <TextRow
          key={index}
          label={item.label}
          value={item.value}
          labelFontSize={12}
          valueFontSize={12}
          labelFontWeight="none"
          labelColor="#333"
          valueColor="#666"
          labelWidth={250}
          marginVertical="3%"
        />
      ))}

      <Spacer height={'2%'}></Spacer>
      <View style={styles.divider} />
      <Spacer height={'2%'}></Spacer>

      {familyData?.map((item, index) => (
        <TextRow
          key={index}
          label={item.label}
          value={item.value}
          labelFontSize={12}
          valueFontSize={12}
          labelFontWeight="none"
          labelColor="#333"
          valueColor="#666"
          labelWidth={250}
          marginVertical="3%"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  divider: {
    height: 2,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
});
