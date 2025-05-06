import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Roles_screen from "../../Pages/Roles_screen";
import Login_screen from "../../Pages/Login_screen";

//! NOT USED IN THE NAVIGATION 

const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Roles">
      <Stack.Screen
        name="Roles"
        component={Roles_screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login_screen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
