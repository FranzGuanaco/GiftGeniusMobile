import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function NewsBox({text = "Explorez notre réseau de plus de 200 partenaires avec Gift Genius et trouvez le cadeau idéal à chaque fois !"}) { 
  return (
    <View style={styles.NewsBox}>
      <Text style={styles.text}>{text}</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  NewsBox: {
    backgroundColor: '#ECC25A',
    padding: 1,
    height: 50, 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,

    color: 'white', // Mettez 'white' entre guillemets
   
  },
});

export default NewsBox;
