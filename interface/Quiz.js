import React, { useState, useRef } from 'react';
import Navbar from '../component/Navbar';
import Category from '../component/Category';
import ProductBox from '../component/ProductBox';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import NewsBox from '../component/NewsBox';
import { Dimensions } from 'react-native';
import ProductInfo from '../component/ProductInfo';
import Suggestion from '../component/Suggestion';
import QuestionBox from '../component/QuestionBox';
import ProgressBar from '../component/Progessbar';


const Quiz = ({question = "Question par défaut"}) => {

  const windowWidth = Dimensions.get('window').width;

    
  return (
    <SafeAreaView style={styles.wrapper}>
      
        <Navbar/>
        <NewsBox/>
      
        <View style={styles.progressBarContainer}>
        <ProgressBar barWidth={windowWidth} />
        </View>
        <View style={styles.textBoxContainer}>
        <Text style={styles.questionText}>{question}</Text>
        </View>

        <View style={styles.questionBoxContainer}>
        <View style={styles.questionBox}>
          <QuestionBox containerWidth={windowWidth}/>
          <QuestionBox containerWidth={windowWidth}/>
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
  navbar: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  textBoxContainer: {
    marginTop: '10%',
    alignItems: 'center'
  },
  questionText: {
    fontSize: 20,
  },
  questionBoxContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centre le contenu horizontalement
    marginTop: '5%',
  },
  questionBox: {

    width: '90%', // Définit la largeur à 80% du conteneur
    height: '90%',
    padding: 10,
  },
  progressBarContainer: {
marginTop: '12%',
alignItems: 'center'
  },
});


export default Quiz;