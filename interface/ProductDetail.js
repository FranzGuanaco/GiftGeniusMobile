import React from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import QuizButton from '../component/Quizbutton';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsBox from '../component/NewsBox';
import { useNavigation } from '@react-navigation/native';


const ProductDetail = () => {

    
  return (
    <SafeAreaView style={styles.wrapper}>
        <Navbar/>
        <NewsBox/>
        <View style={{marginTop:'15%'}}></View>
        <Category/>
        <View style={{marginTop:'8%', marginRight: '44%'}}></View>
        <ProductBox />
        <View style={styles.quizButtonContainer}>
        <QuizButton></QuizButton>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  quizButtonContainer: {
    position: 'relative', // Position relative pour le conteneur
    bottom: '-22%', // Déplace le QuizButton de 50% de sa largeur vers la gauche
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


export default ProductDetail;