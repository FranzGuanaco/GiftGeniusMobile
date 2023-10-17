import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const SellerButton = ({ imageUrl, onPress, children }) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.buttonImage} />}
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 55,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 60,
    height: 35,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    marginRight: 10,
    maxWidth: 70,
    maxHeight: 40,
  },
});

export default SellerButton;

