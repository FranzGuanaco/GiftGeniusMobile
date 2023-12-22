import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

function Input({ type, placeholder, handleChange }) {
    // React Native TextInput n'utilise pas 'type' comme le web
    // Vous pouvez ajouter une logique supplémentaire si nécessaire pour gérer différents types

    return (
        <TextInput
            secureTextEntry={type === 'password'}
            placeholder={placeholder}
            onChangeText={handleChange}
            style={styles.input}
            placeholderTextColor={'gray'}
        />
    );
}

// Définir les propTypes pour la validation des props
Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    input: {
        width: '50%', // Vous pouvez utiliser une largeur fixe ou une largeur basée sur les Dimensions de l'écran
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 33,
        fontSize: 16, // Taille de police par défaut
    }
});

// Adapter le style en fonction de la largeur de l'écran
const windowWidth = Dimensions.get('window').width;
if (windowWidth <= 1000) {
    styles.input.width = 200;
    styles.input.fontSize = 12;
}
if (windowWidth <= 800) {
    styles.input.width = 130;
    styles.input.fontSize = 10;
}

export default Input;
