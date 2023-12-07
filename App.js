import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Category from './component/Category';
import Navbar from './component/Navbar';
import NewsBox from './component/NewsBox';
import SellerButton from './component/SellerButton';
import ProductBox from './component/ProductBox';
import { SwiperFlatList } from 'react-native-swiper';
import Homepage from './interface/Homepage';

export default function App() {
  console.log('hello')
  return (
    <Homepage/>
  );
}

