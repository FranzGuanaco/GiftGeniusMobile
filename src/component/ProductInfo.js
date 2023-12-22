import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function ProductInfo() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  const getItemHeight = (item) => {
    switch (item) {
      case "ac-1": return 100;
      case "ac-2": return 140;
      default: return 0;
    }
  };

  const isItemOpen = (item) => openItem === item;

  return (
    <View style={styles.acContainer}>
      <View>
        <TouchableOpacity onPress={() => toggleItem("ac-1")} style={styles.label}>
        <View style={styles.labelContent}>
          <Text style={styles.span}>
            Details 
            </Text>
            <Text>{isItemOpen("ac-1") ? "-" : "+"}</Text>
            
          
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <View style={[styles.article, { height: isItemOpen("ac-1") ? getItemHeight("ac-1") : 0 }]}>
          <Text>Votre texte ici...</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => toggleItem("ac-2")} style={styles.label}>
        <View style={styles.labelContent}>
          <Text style={styles.span}>
            About me 
            </Text>
            <Text>{isItemOpen("ac-2") ? "-" : "+"}</Text>
          
          </View>
        </TouchableOpacity>
        <View style={styles.separator} />
        <View style={[styles.article, { height: isItemOpen("ac-2") ? getItemHeight("ac-2") : 0 }]}>
          <Text>Votre texte ici...</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    acContainer: {
      maxWidth: 400,
      width: '100%',
      margin: 10,
      textAlign: 'left',
      alignSelf: 'center', // Pour centrer le conteneur sur l'écran
    },
    label: {
      height: 30,
      lineHeight: 21,
      fontSize: 12,
      fontFamily: 'Open Sans',
      justifyContent: 'center', // Alignement vertical du texte
    },
    labelContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%', // Assurez-vous que le conteneur prend toute la largeur
      },
    separator: {
      height: 1,
      backgroundColor: '#D9D9D9',
      width: 240
    },
    article: {
      overflow: 'hidden',
      position: 'relative',
      zIndex: 10,
      padding: 10,
    },
    span: {
      flexDirection: 'row', // Remplace 'display: flex'
      justifyContent: 'space-between',
      width: 230,
    },
    // Styles pour simuler les media queries
    smallContainer: {
      width: '70%',
    },
    smallLabel: {
      width: 200,
    },
    smallArticle: {
      width: '70%',
    },
  });
  
  // Pour appliquer les styles "small" en fonction de la taille de l'écran
  import { Dimensions } from 'react-native';
  
  const windowWidth = Dimensions.get('window').width;
  
  if (windowWidth <= 1250) {
    styles.acContainer = { ...styles.acContainer, ...styles.smallContainer };
    styles.label = { ...styles.label, ...styles.smallLabel };
    styles.article = { ...styles.article, ...styles.smallArticle };
  }
  
  export default ProductInfo;