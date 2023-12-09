import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SellerButton from './SellerButton'; 

const ProductBox = ({ 
  imageUrl, 
  onclick,
  productName = 'Nom du Produit', // Valeur par défaut pour productName
  shortDescription = 'Description Courte' // Valeur par défaut pour shortDescription
}) => {
return (
  <View style={styles.container}>
    <View style={styles.square}>
      <Image source={{ uri: imageUrl }} style={styles.squareImage} onClick={onclick}/>
    </View>
    <View style={styles.descriptionStyle}>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.shortDescription}>{shortDescription}</Text>
    </View>
    <View style={styles.MarginButton}>
      <SellerButton/>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
    square: {
      width: 170,
      height: 170,
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
    MarginButton: {
        marginTop: '3%',
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
