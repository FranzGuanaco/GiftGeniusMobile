import React, { useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import QuizButton from '../component/Quizbutton';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsBox from '../component/NewsBox';
import { useNavigation } from '@react-navigation/native';


const Homepage = () => {

  const screenHeight = Dimensions.get('window').height;

  // Calculez 70% de la hauteur de l'écran
  const buttonHeight = screenHeight * 0.48;

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

        <ScrollView style={styles.scrollView}>

        <View style={{marginTop:'15%'}}></View>
        <Category/>
        <View style={{marginTop:'8%', marginRight: '44%'}}></View>
       
        <TouchableOpacity onPress={goToProductDetail}>
        <ProductBox display = {true}/>
        </TouchableOpacity>
        <View style={{marginTop:'22%'}}></View>
        <View style={{marginTop:'8%', marginRight: '44%'}}></View>

   
        </ScrollView>

        <View style={styles.quizButtonContainer}>
            <QuizButton height={buttonHeight}/>
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
    position: 'absolute', // Position relative pour le conteneur
    bottom: '-38%', // Déplace le QuizButton de 50% de sa largeur vers la gauche
    alignSelf: 'center', // Alignement à la fin du conteneur parent
  },
});


export default Homepage;