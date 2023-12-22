import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Category = ({category = "category"}) => {
  return (
    <View style={styles.categoryBox}>
      <View style={styles.categoryBoxBefore}>
        <Text style={styles.textStyle}>{category}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    width: 220,
    height: 20,
    backgroundColor: '#1B1B1B',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBoxBefore: {
    width: 240,
    height: 40,
    backgroundColor: '#1B1B1B',
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center', // Centrer verticalement le contenu
    alignItems: 'center', // Centrer horizontalement le contenu
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Category;
