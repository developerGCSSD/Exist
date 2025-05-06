import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Reducers/AuthReducer';
import Modal from 'react-native-modal';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleProfilePress = () => {
    navigation.navigate('Profile'); // Replace 'Profile' with your actual profile screen route name
  };

  const handleLogoutPress = () => {
    setModalVisible(true); // Show the modal
  };

  const handleConfirmLogout = () => {
    try {
      // Dispatch the logout action
      dispatch(logout());

      // Navigate to the Roles screen
      navigation.reset({ index: 0, routes: [{ name: 'Roles' }] });

      console.log('User logged out and navigated to Roles screen.');
      setModalVisible(false); // Close the modal
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="Settings"
        leftIcon="arrow-back"
        onLeftPress={() => navigation.goBack()} // Navigate back to Home
      />

      {/* Content */}
      <View style={styles.content}>
        {/* Profile Card */}
        <TouchableOpacity style={styles.card} onPress={handleProfilePress}>
          <Text style={styles.cardText}>Profile</Text>
        </TouchableOpacity>

        {/* Logout Card */}
        <TouchableOpacity style={styles.card} onPress={handleLogoutPress}>
          <Text style={styles.cardText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Logout</Text>
          <Text style={styles.modalMessage}>Are you sure you want to log out?</Text>
          <View style={styles.modalActions}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutButton} onPress={handleConfirmLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

