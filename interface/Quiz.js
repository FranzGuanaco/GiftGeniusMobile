import React, { useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import NewsBox from '../component/NewsBox';
import ProductInfo from '../component/ProductInfo';
import Suggestion from '../component/Suggestion';
import QuestionBox from '../component/QuestionBox';
import ProgressBar from '../component/Progessbar';


const Quiz = () => {

    
  return (
    <SafeAreaView style={styles.wrapper}>
      
        <Navbar/>
        <NewsBox/>

        <View style={styles.textBoxContainer}>
        <Text style={styles.questionText}>test</Text>
        </View>

        <View style={styles.questionBoxContainer}>
        <View style={styles.questionBox}>
          <QuestionBox />
        </View>
        <View style={styles.progressBarContainer}>
          
        </View>
      </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navbar: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  textBoxContainer: {
    marginTop: '30%',
    alignItems: 'center'
  },
  questionText: {
    fontSize: 20,
  },
  questionBoxContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '25%',
    marginTop: '10%'
  },
  questionBox: {
    border: '2px solid red', // Note: React Native uses different styles, not CSS
    padding: 10,
    width: '40%',
    height: '80%',
  },
  progressBarContainer: {
    position: 'absolute',
    top: '100%',
    left: '30%',
    zIndex: 1,
  },
});


export default Quiz;