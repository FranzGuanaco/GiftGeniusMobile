import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SellerButton from './SellerButton'; 

const ProductBox = ({ 
  imageUrl, 
  onclick,
  display = false,
  productName = 'Nom du Produit', // Valeur par défaut pour productName
  shortDescription = 'Description Courte', // Valeur par défaut pour shortDescription
  width = 170, // Valeur par défaut pour la largeur
  height = 170,
  marginLeft='5%', 
  marginTop= "3%" // Valeur par défaut pour la hauteur
}) => {
return (
  <View style={[{marginLeft, width, height}]}>
      <View style={[styles.square, {width, height}]}>
      <Image source={{ uri: imageUrl }} style={styles.squareImage} onClick={onclick}/>
    </View>
    {display && (
    <View style={styles.descriptionStyle}>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.shortDescription}>{shortDescription}</Text>
    </View>
    )}
    <View style={[{marginTop}]}>
      <SellerButton/>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
    square: {
      backgroundColor: 'red',
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
    descriptionStyle: {
        marginTop: '1%',
      },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000', // Vous pouvez personnaliser la couleur et d'autres styles
      },
    shortDescription: {
        fontSize: 14,
        color: '#666', // Couleur et taille pour la description
      },

     container: {
        // Autres styles
        marginLeft: '5%', // Ajoutez une marge à droite
      },
  });
  

export default ProductBox;
