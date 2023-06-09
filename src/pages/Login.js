import { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
  
    const handleLogin = () => {
      console.log('Email:', email);
      console.log('Password:', password);
      if (email === password) {
          navigation.navigate('Home')
      } else {  
        alert('senha inválida!')
      }
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (emailRegex.test(email)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }


  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            validateEmail(text);
          }}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {isEmailValid ? null : (
          <Text style={styles.errorMessage}>Endereço de email inválido</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e1ede4',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#549151',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    errorMessage: {
      color: 'red',
      marginBottom: 10,
    }
  });
