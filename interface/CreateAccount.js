import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../component/Input';
import SellerButton from '../component/SellerButton';
import emailjs from '@emailjs/browser';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext'; // Assurez-vous que ce contexte est adapté pour React Native

export const generateRandomNumber = () => Math.floor(100000 + Math.random() * 900000);

function CreateAccount() {
  const {email, setEmail, password, setPassword, nickname, setNickname , randomNum, setRandomNum} = useAuth();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const navigation = useNavigation();

  const goToConfirmation = () => {
    navigation.navigate('Confirmation');
  };

  const sendEmail = async () => {
    const newRandomNum = generateRandomNumber();
    setRandomNum(newRandomNum);

    const emailParams = {
      from_name: "Gift Genius",
      user_email: email,
      unique_code: newRandomNum
    };

    try {
      const result = await emailjs.send('gift_genius2024', 'GiftGeniusConfirmation', emailParams, 'WNkAG24NwAI_iP2iL');
      console.log(result.text);
      goToConfirmation(); // Naviguer vers la page de confirmation après l'envoi de l'email
    } catch (error) {
      console.error(error.text);
      throw error; // Propagez l'erreur pour la gérer dans la fonction appelante
    }
  };

  const handleCreateAccount = () => {
    console.log("Email avant envoi:", email);
    sendEmail()
      .then(() => {
        goToConfirmation();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Input
            type="text"
            placeholder="Nickname"
            handleChange={(value) => setNickname(value)}
          />
          <Input
            type="email"
            placeholder="Email"
            handleChange={(value) => setEmail(value)}
          />
          <Input
            type="password"
            placeholder="Password"
            handleChange={(value) => setPassword(value)}
          />
        </View>
        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          <SellerButton title="Create Account" onPress={handleCreateAccount} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    alignSelf: 'center',
    width: '80%',
    padding: 30,
    backgroundColor: '#ffffff',
    marginTop: 100,
    elevation: 3,
  }
});

export default CreateAccount;

