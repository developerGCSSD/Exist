import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../Redux/Reducers/AuthReducer'; 
import { useNavigation } from '@react-navigation/native';

export const CustomDrawerContent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation() 

  const handleLogout = async () => {
    navigation.navigate('Roles')
    console.log('navigate to roles!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    dispatch(logout()); 
    
  };

  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoutText: {
    fontSize: 18,
    color: '#0F67B1',
    fontWeight: 'bold',
    textAlign:"center"
  },
});
