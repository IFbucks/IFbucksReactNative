import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button, StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "./src/components/Header";
import PhotoCard from "./src/components/Card";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";

// export default function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isEmailValid, setIsEmailValid] = useState(false);

//   const handleLogin = () => {
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailRegex.test(email)) {
//       setIsEmailValid(true);
//     } else {
//       setIsEmailValid(false);
//     }
//   }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
        <Text>Tela principal</Text>
        <Button
          title="Ip para Detalhes"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela com detalhes</Text>

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
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Detalhes' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
