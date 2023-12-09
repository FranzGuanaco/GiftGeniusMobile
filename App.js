import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './interface/Homepage';
import ProductDetail from './interface/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('hello')
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

