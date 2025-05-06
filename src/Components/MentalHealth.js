import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import QuestionsCard from "./QuestionsCard"; 
import BottomSheetModal from "./BottomSheetModal"; 

export default function MentalHealth() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const questions = [
    "Have you or a member of your family ever suffered or been hospitalized for a mental illness? If yes, please specify when and where?",
    "Have you or a member of your family ever suffered or been hospitalized for drug/alcohol addiction?",
    "Have you ever struggled with eating problems?",
    "Have you ever had any psychotherapy/counseling before? When? For how long? What were the reasons?",
    "What would you like to gain from therapy?",
    "Would you like anyone else to be involved in the therapy with you? If yes, who?",
    "Have you ever attempted?",
  ];

  // Function to open modal with selected question
  const handleOpenModal = (question) => {
    setSelectedQuestion(question);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {questions.map((question, index) => (
        <QuestionsCard 
          key={index} 
          question={question} 
          onPress={() => handleOpenModal(question)} // Pass question to modal
        />
      ))}

      {/* Modal Component */}
      <BottomSheetModal
        visible={modalVisible}
        onDismiss={() => setModalVisible(false)}
        title="Question Details"
        question={selectedQuestion}
        answer="This is a sample answer. You can replace this with dynamic data."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

