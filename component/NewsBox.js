import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function NewsBox() { 
  return (
    <View style={styles.NewsBox}>
      <Text style={styles.text}>r</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  NewsBox: {
    backgroundColor: '#ECC25A',
    padding: 10,
    height: 50, 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontStyle: 'bold',
    color: 'white', // Mettez 'white' entre guillemets
   
  },
});

export default NewsBox;
