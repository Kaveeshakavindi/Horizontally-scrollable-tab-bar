import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from './ThemeContext';
import LandingScreen from './LandingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabBar from './TopTabBar';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <ThemeProvider>
      <SafeAreaProvider >
      <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LandingScreen">
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="TopTabBar" component={TopTabBar} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App

