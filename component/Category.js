import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Category= () => {
    console.log('hello')
  return (
    <View style={styles.categoryBox}>
      <View style={styles.categoryBoxBefore}>
        <Text style={{color:'white'}}>ook</Text>
     </View>
     </View>
  );
};

const styles = StyleSheet.create({
    categoryBox: {
      width: 220,
      height: 40,
      backgroundColor: '#1B1B1B',
      color: 'white',
      position: 'relative',
      fontSize: 16,
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryBoxBefore: {
      content: '', // Pseudo-élément ::before
      position: 'absolute',
      top: 0,
      right: -40, // Réglez la distance d'arrondi pour la partie droite
      width: 240,
      height: 40,
      backgroundColor: '#1B1B1B',
      borderBottomRightRadius: 25, // Coin arrondi à droite
      borderTopRightRadius: 25, // Coin arrondi à droite
      alignItems: 'center', // Centrer verticalement
    },
  });

export default Category;
