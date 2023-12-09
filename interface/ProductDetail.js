import React, { useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import QuizButton from '../component/Quizbutton';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsBox from '../component/NewsBox';
import { useNavigation } from '@react-navigation/native';
import ProductInfo from '../component/ProductInfo';
import Suggestion from '../component/Suggestion';


const ProductDetail = () => {

    
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <Navbar/>
        <NewsBox/>
        <View style={{marginTop:'15%'}}></View>
       
        <View style={{alignItems: 'center'}}>
        <ProductBox display={true} width={250} height={250} marginLeft='0' marginTop= '8%'/>
        
        <View style={{marginTop:'28%'}}>
      <ProductInfo/>
        </View>
        </View>
        <View style={{marginTop:'10%'}}>
        <Suggestion/>
        </View>
        </ScrollView>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white"
  },
  lowerHalf: {
    flex: 1,
    backgroundColor: 'white',
  },
});


export default ProductDetail;