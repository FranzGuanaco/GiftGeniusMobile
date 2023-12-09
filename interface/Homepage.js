import React, { useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import QuizButton from '../component/Quizbutton';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsBox from '../component/NewsBox';
import { useNavigation } from '@react-navigation/native';


const Homepage = () => {

    console.log('Homepage launched')
    const navigation = useNavigation();

  const goToProductDetail = () => {
    navigation.navigate('ProductDetail'); // Assurez-vous que 'ProductDetail' est un écran valide dans votre navigateur
  };
  return (
    <>
    
    <SafeAreaView style={styles.wrapper}>
    <Navbar/>
        <NewsBox/>
        <View style={{marginTop:'15%'}}></View>
        <Category/>
        <View style={{marginTop:'8%', marginRight: '44%'}}></View>
        <TouchableOpacity onPress={goToProductDetail}>
        <ProductBox display = {true}/>
        </TouchableOpacity>
        <View style={styles.quizButtonContainer}>
        <QuizButton></QuizButton>
        </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  quizButtonContainer: {
    position: 'relative', // Position relative pour le conteneur
    bottom: '-32%', // Déplace le QuizButton de 50% de sa largeur vers la gauche
    alignItems: 'center', // Alignement à la fin du conteneur parent
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


export default Homepage;