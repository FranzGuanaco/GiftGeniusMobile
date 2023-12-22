import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useAuth } from './AuthContext';
import emailjs from '@emailjs/browser';
import { useNavigation } from '@react-navigation/native';


function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const GmailConnection = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            // La suite de la logique...
            navigation.navigate('Home'); // Utilisez la navigation React Native
        } catch (error) {
            // Gestion des erreurs...
        }
    };

    const Connection = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User connected:', userCredential.user);
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const goToCreateAccount = () => {
        navigation.navigate('CreateAccount'); // Utilisez la navigation React Native
        console.log("CreateAccount")
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.headerText}>Sign in</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email or phone number"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={Connection}>
                    <Text>Connexion</Text>
                </TouchableOpacity>
                <Text>Or sign in with...</Text>
                <TouchableOpacity style={styles.button} onPress={GmailConnection}>
                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={goToCreateAccount}>
                   
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    createAccountContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c2b2b',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button: {
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 55,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    headerText: {
        fontSize: 25,
        marginBottom: 20,
    },
    subText: {
        fontSize: 17,
        marginBottom: 20,
    },
    icon: {
        width: 30,
        height: 30,
    }
});

export default Login;
