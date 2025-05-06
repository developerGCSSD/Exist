import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextRow from "../Components/TextRow"; 
import Spacer from "./Spacer";

export default function PhysicalHealth() {
  return (
    <View style={styles.container}>
      {/* Medical Information */}
      <TextRow
        label="Any medical conditions"
        value="Diabetes and blood pressure"
        labelFontSize={12}
        valueFontSize={12}
        labelFontWeight="none"
        labelColor="#333"
        valueColor="#666"
        marginVertical="3%"
      />
      <TextRow
        label="List currently medications"
        value="Metformin, Insulin Glargine"
        labelFontSize={12}
        valueFontSize={12}
        labelFontWeight="none"
        labelColor="#333"
        valueColor="#666"
        marginVertical="3%"
      />
      <TextRow
        label="Doctor’s Name"
        value="Ahmed Nour"
        labelFontSize={12}
        valueFontSize={12}
        labelFontWeight="none"
        labelColor="#333"
        valueColor="#666"
        marginVertical="3%"
      />
      <TextRow
        label="Telephone number"
        value="+2010985958952"
        labelFontSize={12}
        valueFontSize={12}
        labelFontWeight="none"
        labelColor="#333"
        valueColor="#666"
        marginVertical="3%"
      />

      <Spacer height={'2%'} />

      {/* Lifestyle Questions with Alternating Background Colors */}
      {[
        { question: "Do you exercise ?", answer: "Yes" },
        { question: "Do you smoke ?", answer: "Yes" },
        { question: "Do you drink ?", answer: "Yes" },
        { question: "Do you use drugs ?", answer: "Yes" },
      ].map((item, index) => (
        <View
          key={index}
          style={[
            styles.section,
            index % 2 === 0 ? styles.lightGrayBackground : styles.whiteBackground
          ]}
        >
          <Text style={styles.sectionHeader}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
          <TextRow label="How Much" value="---" labelFontSize={12} valueFontSize={12} />
          <TextRow label="Since When" value="---" labelFontSize={12} valueFontSize={12} />
        </View>
      ))}

      <Spacer height={'2%'} />

      {/* Physical Measurements */}
      <View style={{ marginHorizontal: "2%" }}>
        <TextRow label="Weight" value="80 KG" labelFontSize={14} valueFontSize={14} />
        <TextRow label="Height" value="175 CM" labelFontSize={14} valueFontSize={14} />
      </View>

      <Spacer height={'2%'} />

      {/* Eating Habits */}
      <Text style={styles.sectionHeader}>Describe your eating habits</Text>
      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: "5%",
    marginVertical: 5,
    borderRadius: 10,
  },
  lightGrayBackground: {
    backgroundColor: "#F4F4F4",
  },
  whiteBackground: {
    backgroundColor: "#FFFFFF",
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  answer: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginVertical: '3%',
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});
