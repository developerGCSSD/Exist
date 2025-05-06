/* eslint-disable react/prop-types */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home_screen from "../../Pages/Home_screen";
import Roles_screen from "../../Pages/Roles_screen";
import LoginScreen from "../../Pages/Login_screen";
import Settings_screen from "../../Pages/Settings_screen";
import SessionDetails_screen from "../../Pages/SessionDetails_screen";
import IntakeInfo_screen from "../../Pages/IntakeInfo_screen";

const Stack = createNativeStackNavigator();

const AppNavigator = ({ initialRouteName }) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name="Roles"
        component={Roles_screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home_screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings_screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SessionDetails"
        component={SessionDetails_screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="IntakeInfo"
        component={IntakeInfo_screen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
