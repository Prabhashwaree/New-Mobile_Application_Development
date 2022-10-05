/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  export default function Signup() {
    return (
      <View style={styles.container}>
                 <Text  style={{color: 'black', fontSize: 50,  marginTop: '-44%'}}> Sign up</Text>
        <TextInput
          placeholderTextColor="black"
          style={styles.input1}
          placeholder="Username"
        />
        <TextInput
          placeholderTextColor="black"
          style={styles.input2}
          placeholder="Password"
        />
        <TextInput
          placeholderTextColor="black"
          style={styles.input3}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor="black"
          style={styles.input4}
          placeholder="Address"
        />
  
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: '#fffff', fontSize: 20}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 900,
      backgroundColor: '#ffffff',
    },
    input1: {
      marginTop: '25%',
      borderWidth: 1,
      padding: 10,
      width: '80%',
      color: '#000000',
  
      borderRadius: 10,
    },
    input2: {
      marginTop: '5%',
      borderWidth: 1,
      padding: 10,
      width: '80%',
      borderRadius: 10,
    },
    input3: {
      marginTop: '5%',
      borderWidth: 1,
      padding: 10,
      width: '80%',
      borderRadius: 10,
    },
    input4: {
      marginTop: '5%',
      borderWidth: 1,
      padding: 10,
      width: '80%',
      borderRadius: 10,
    },
    btn: {
      width: '80%',
      padding: 5,
      backgroundColor: 'green',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10%',
      borderRadius: 100,
    },
    
  });