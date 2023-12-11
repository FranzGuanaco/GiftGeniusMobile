import React from 'react';
import quizIcon from './quiz-icon.png';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuizButton = () => {
  const navigation = useNavigation();

  const goToQuiz = () => {
    navigation.navigate('Quiz');
    console.log('test');
  };

  return (
    <View style={styles.circleSlice}>
      <TouchableOpacity style={styles.imageContainer} onPress={goToQuiz}>
        <Image source={quizIcon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circleSlice: {
    width: 300, // Largeur du cercle
    height: 700, // Hauteur à la moitié de la largeur pour obtenir un demi-cercle
    backgroundColor: '#ECC25A',
    borderRadius: 300, // La moitié de la largeur pour obtenir un demi-cercle
    overflow: 'hidden',
    justifyContent: 'center', // Centre verticalement
    alignItems: 'center', // Centre horizontalement
  },
  imageContainer: {
    position: 'absolute', // Positionnement absolu
    top: 10, // Place en haut du conteneur
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  image: {
    width: '100%', // Utiliser toute la largeur du conteneur
    height: '100%', // Utiliser toute la hauteur du conteneur
    resizeMode: 'contain', // Assurez-vous que l'image s'adapte bien dans le conteneur
  },
});

export default QuizButton;


