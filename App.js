import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Category from './component/Category';
import Navbar from './component/Navbar';
import NewsBox from './component/NewsBox';
import SellerButton from './component/SellerButton';
import ProductBox from './component/ProductBox';

export default function App() {
  console.log('hello')
  return (
    <SafeAreaView style={styles.wrapper}>
    
        <Navbar/>
        <NewsBox/>
        <Category/>
        <ProductBox/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  upperHalf: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerHalf: {
    flex: 1,
    backgroundColor: 'white',
  },
});
