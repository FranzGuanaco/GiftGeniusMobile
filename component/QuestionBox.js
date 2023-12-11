import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const QuestionBox = ({ imageUrl, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.questionBox}>
      <Image source={{ uri: imageUrl }} style={styles.questionBoxImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    width: 30,
    height: 20,
    backgroundColor: 'red',
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
