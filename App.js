import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper'; // Import PaperProvider
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import store from './src/Redux/Store/Store'; 
import { retrieveToken } from './src/AsyncStorage/LoginAuth';
import AppNavigator from './src/Navigation/App/AppNavigator';

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null); 

  useEffect(() => {
    const determineInitialRoute = async () => {
      const storedToken = await retrieveToken();
      setInitialRoute(storedToken ? 'Home' : 'Roles');
    };
    determineInitialRoute();
  }, []);

  if (initialRoute === null) {
    return null; // You can replace this with a loading screen
  }

  return (
    <ReduxProvider store={store}>
      <PaperProvider> {/* Wrap the app with PaperProvider */}
        <GestureHandlerRootView style={{ flex: 1 }}> 
          <NavigationContainer>
            <AppNavigator initialRouteName={initialRoute} />
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </ReduxProvider>
  );
}
