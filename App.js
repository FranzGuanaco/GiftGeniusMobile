import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/interface/Homepage';
import ProductDetail from './src/interface/ProductDetail';
import Quiz from './src/interface/Quiz';
import Login from './src/interface/Login';
import CreateAccount from './src/interface/CreateAccount';
import EmailVerification from './src/interface/Confirmation';
import { AuthProvider } from './src/interface/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('hello')
  return (
    <AuthProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Home" 
          component={Homepage} 
          options={{ headerShown: false }}  // Cette ligne cache l'en-tête
        />
        <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetail} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="Quiz" 
        component={Quiz} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="CreateAccount" 
        component={CreateAccount} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="EmailVerification" 
        component={EmailVerification} 
        options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}

