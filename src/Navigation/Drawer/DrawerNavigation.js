import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "./DrawerContent";
// import AppNavigator from '../App/AppNavigator'
import HomeScreen from "../../Pages/Home_screen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        drawerStyle: { backgroundColor: "white", width: '55%' },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
