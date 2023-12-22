import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "@react-native-firebase/auth";
import { collection, addDoc, doc, setDoc } from "@react-native-firebase/firestore";
import { auth } from '../Firebase';
import { firestore } from '../Firebase';
import { app } from '../Firebase';
import { useAuth } from './AuthContext'; // Assurez-vous que cette importation est correcte


function EmailVerification({ navigation }) {

  console.log("test auth:", auth);

  const goToEmailVerification = () => {
    navigation.navigate('Home');
  };

  const { email, password, nickname, randomNum } = useAuth();
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const test = async (userUID) => {
    // Accédez à la collection "Users" et ajoutez un document
    const userCollection = collection(firestore, "Users");
    const laDoc = doc(userCollection, userUID);

    try {
      await setDoc(laDoc, {
        name: nickname,
        email: email,
        favorite: {}
      });
      console.log("Document écrit avec succès !");
    } catch (error) {
      console.error("Erreur lors de l'écriture du document : ", error);
    }
  };

  const handleSubmit = async () => {
    const Code = code.join(''); // Join the code array into a string
    const verificationCode = Code.toString(); // Convert the string to a number
    const randomNumber = randomNum.toString(); // Convert the random number to a number
  
    // Validate the verification code
    if (verificationCode === randomNumber) {
      // Update email and password with user input from useAuth
    
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password)
        const user = userCredential.user;
        console.log('User created:', user);
  
        // ... Additional logic after user creation ...
      } catch (error) {
        console.error('erreur verfication code:', error);
      }
    } else {
      console.error('Verification code mismatch:', verificationCode, '!=', randomNumber);
    }
  };
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Verify your email address</Text>
        <Text>We send you a six-digit code to {email}</Text>
        <Text>Enter the code below to confirm your email address</Text>

        <View style={styles.codeInputContainer}>
          {code.map((data, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              value={data}
              onChangeText={(value) => handleInputChange(value, index)}
              maxLength={1}
              keyboardType="number-pad"
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
});

export default EmailVerification;
