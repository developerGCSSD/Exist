/* eslint-disable react/prop-types */
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TextRow from "./TextRow";
export default function DetailsCard({ time, clientName, issue, sessionType, lastVisit, sessionMethod }) {
  return (
    <View style={styles.card}>
      <TextRow label="Time" value={time} labelFontWeight={'normal'} labelFontSize={12} valueFontSize={12}/>
      <TextRow label="Client Name" value={clientName} labelFontWeight={'normal'} labelFontSize={12} valueFontSize={12}/>
      <TextRow label="Presenting Issue" value={issue} labelFontWeight={'normal'} labelFontSize={12} valueFontSize={12} />

      <View style={styles.row}>
        <Text style={styles.label}>Session Method</Text>
        <View style={styles.sessionType}>
          <MaterialCommunityIcons 
            name={sessionType === "Online" ? "laptop" : "account-multiple"} 
            size={20} 
            color="#666" 
          />
          <Text style={styles.sessionTypeText}>{sessionMethod || "Unknown"}</Text>
        </View>
      </View>

      <TextRow label="Session Type" value={sessionType} labelFontWeight={'normal'} labelFontSize={12} valueFontSize={12} />
      <TextRow label="Last Visit Date" value={lastVisit} labelFontWeight={'normal'} labelFontSize={12} valueFontSize={12}/>
    </View>
  );
}

// const TextRow = ({ label, value }) => (
//   <View style={styles.row}>
//     <Text style={styles.label}>{label}</Text>
//     <Text style={styles.value}>{value}</Text>
//   </View>
// );

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical:"2%"

  },
  label: {
    color: "#3674B5",
    width: 200, // Ensure all labels have a fixed width for alignment
    fontSize:12
  },
  value: {
    color: "#666",
    fontWeight: "bold",
    flex: 1, // Ensures text aligns properly
    textAlign: "left",
  },
  sessionType: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  sessionTypeText: {
    color: "#666",
    fontWeight: "bold",
    marginLeft: 5, // Spacing between icon and text
    fontSize:12
  },
});
