import React from 'react';
import { View, StyleSheet } from 'react-native';


const ProgressBar = ({ progress, barWidth }) => {
  // Assurez-vous que progress est un nombre entre 0 (pour 0%) et 1 (pour 100%)
  const fillingWidth = progress * 100 + '%'; // Convertit la progression en pourcentage de la largeur totale
  const progressbarWidth = barWidth * 0.7;

  return (
    <View style={[styles.progressBackground, { width: progressbarWidth }]}>
      <View style={[styles.progressFilling, { width: fillingWidth }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBackground: {
    height: 20,
    backgroundColor: '#000', // La couleur de fond de votre choix
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#000', // Couleur de la bordure de la barre de progression
    borderWidth: 0,
  },
  progressFilling: {
    height: '100%',
    backgroundColor: 'gold', // Vous pouvez utiliser LinearGradient pour un effet dégradé
    borderRadius: 10,
  },
});

export default ProgressBar;
