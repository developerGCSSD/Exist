/* eslint-disable react/prop-types */
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Modal, Portal } from "react-native-paper";

export default function BottomSheetModal({ 
  visible, 
  onDismiss, 
  title, 
  menuActions = [], 
  question, 
  answer 
}) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.overlay}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{title}</Text>

          {/* Render either actions or question-answer */}
          {menuActions.length > 0 ? (
            menuActions.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalButton}
                onPress={item.action}
              >
                <Text style={styles.modalButtonText}>{item.title}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.questionContainer}>
              <Text style={styles.question}>{question}</Text>
              <Text style={styles.answer}>{answer}</Text>
            </View>
          )}

          {/* Close Button */}
          <TouchableOpacity style={styles.modalClose} onPress={onDismiss}>
            <Text style={styles.modalCloseText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.8)", 
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
    alignSelf: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1F509A",
    marginBottom:"3%"
  },
  modalButton: {
    backgroundColor: "#D9EAFD",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: '3%',
  },
  modalButtonText: {
    color: "#1F509A",
    fontSize: 14,
    fontWeight: "bold",
  },
  questionContainer: {
    marginVertical: '10%',
    marginHorizontal:"2%"
  },
  question: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: '5%',
    lineHeight:20
  },
  answer: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  modalClose: {
    marginTop: 10,
    padding: 12,
    alignItems: "center",
  },
  modalCloseText: {
    fontSize: 16,
    color: "#B82132",
    fontWeight: "bold",
     fontStyle:"italic"
  },
});
