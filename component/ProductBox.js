import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SellerButton from './SellerButton'; // Assurez-vous d'importer le composant SellerButton

const ProductBox = ({ imageUrl, productName, shortDescription }) => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Image source={{ uri: imageUrl }} alt="Votre image" style={styles.squareImage} />
      </View>
      <View style={styles.DescriptionStyle}>
        <Text>{productName} {shortDescription}</Text>
      </View>
      <View style={styles.SellerStyle}>
        <SellerButton style={styles.sellerButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    square: {
      width: 180,
      height: 180,
      backgroundColor: '#EFF3F4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    squareImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    DescriptionStyle: {
      marginTop: '1%',
      fontSize: 14,
    },
  });
  

export default ProductBox;
