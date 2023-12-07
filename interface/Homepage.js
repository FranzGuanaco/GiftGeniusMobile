import React from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NewsBox from '../component/NewsBox';


const Homepage = () => {

    console.log('Homepage launched')
  return (
    <SafeAreaView >
    
        <Navbar/>
        <NewsBox/>
        <View style={{marginTop:'15%'}}></View>
        <Category/>
        <View style={{marginTop:'8%', marginRight: '44%'}}></View>
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



export default Homepage;