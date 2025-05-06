/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextRow from "../Components/TextRow";
import Spacer from "../Components/Spacer";

export default function BasicInfo({ data }) {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          <TextRow
            label={item.label}
            value={item.value}
            valueFontSize={12}
            labelFontSize={12}
            labelFontWeight="none"
            labelColor="#333"
            valueColor="#666"
            marginVertical="3%"
          />
        </View>
      ))}
      <Spacer height={"3%"} />
      <View style={styles.separator} />
      <Spacer height={"3%"} />
      <View style={styles.msg1}>
        <Text style={styles.msgText1}>Leave Message as Exist Counselling Center:</Text>
        <Text style={styles.msgText2}>+201002037811</Text>
      </View>
      <Spacer height={"3%"} />
      <View style={styles.msg2}>
        <Text style={styles.msgText1}>Leave Message as Exist Counselling Center:</Text>
        <Text style={styles.msgText2}>Occupation</Text>
      </View>
      <Spacer height={"3%"} />
      <View style={styles.msg1}>
        <Text style={styles.msgText1}>How did you hear about Exist?</Text>
        <Text style={styles.msgText2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures it takes up full height within ScrollView
  },
  separator: {
    height: 2,
    backgroundColor: "#ddd",
    marginVertical: 5,
  },
  msg1: {
    backgroundColor: "#F4F4F4",
    padding: "3%",
    alignItems: "baseline",
  },
  msg2: {
    padding: "3%",
    alignItems: "baseline",
  },
  msgText1: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    padding: "1%",
  },
  msgText2: {
    fontSize: 12,
    color: "#666",
    padding: "1%",
  },
});
