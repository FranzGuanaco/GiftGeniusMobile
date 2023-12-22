import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const QuestionBox = ({ imageUrl, onClick, containerWidth }) => {

  const boxWidth = containerWidth * 0.4; // 20% de la largeur du conteneur
  
  return (
    <TouchableOpacity onPress={onClick} style={[styles.questionBox, { width: boxWidth }]}>
      <Image source={{ uri: imageUrl }} style={styles.questionBoxImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    height: 140,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionBoxImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

// Responsive styling
const windowWidth = Dimensions.get('window').width;
if (windowWidth <= 600) {
  styles.questionBox.width = 250;
  styles.questionBox.height = 195;
}

export default QuestionBox;
