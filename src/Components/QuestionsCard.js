/* eslint-disable react/prop-types */
import {Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function QuestionsCard({ question, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      <Text style={styles.answer}>Answer....</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3, 
  },
  questionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20, // Increased line height for better readability
    fontWeight:"bold"
  },
  answer:{
    fontSize:12,
    marginHorizontal:"1%",
    marginVertical:"2%",
    fontStyle:'italic',
    color:"#6E8E59",
    fontWeight:"bold"
  }
});
