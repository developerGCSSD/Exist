/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TextRow({ 
  label, 
  value, 
  labelStyle, 
  valueStyle, 
  containerStyle, 
  labelFontSize = 16, 
  valueFontSize = 16, 
  labelColor = "#3674B5", 
  valueColor = "#666",
  labelFontWeight = "bold",
  valueFontWeight = "bold",
  labelWidth = 200, // Default label width
  marginVertical = "2%", // Default margin vertical
}) {
    return (
        <View style={[styles.row, containerStyle, { marginVertical }]}>
            <Text style={[
              styles.label, 
              labelStyle, 
              { width: labelWidth, fontSize: labelFontSize, color: labelColor, fontWeight: labelFontWeight }
            ]}>
                {label}
            </Text>
            <Text style={[
              styles.value, 
              valueStyle, 
              { fontSize: valueFontSize, color: valueColor, fontWeight: valueFontWeight }
            ]}>
                {value || "N/A"}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    textAlign: "left",
  },
  value: {
    flex: 1,
    textAlign: "left",
  },
});
