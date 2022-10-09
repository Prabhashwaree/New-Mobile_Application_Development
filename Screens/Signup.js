/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import UserService from "../service/singup";

export default function Signup({ navigation }) {

  const [Username, setUsername] = new useState("");
  const [Password, setPassword] = new useState("");
  const [Email, setEmail] = new useState("");
  const [Address, setAddress] = new useState("");

  const submit = async (e) => {
    const object = {
      'Username': Username,
      'Password': Password,
      'Email': Email,
      'Address': Address
    };
    let res = await UserService.postUser(object);
    console.log("data" + object.Address);
  };


  return (
    <View style={styles.container}>
      <Text style={{ color: '#f6c708', fontSize: 50, position: 'absolute', top: 100 }}> <b><i>Sign up</i></b></Text>


      <TextInput
        value={Username}
        onChange={e => setUsername(e.target.value)}
        placeholderTextColor="black"
        style={styles.input1}
        placeholder="Username"
      />
      <TextInput
        value={Password}
        onChange={e => setPassword(e.target.value)}
        placeholderTextColor="black"
        style={styles.input2}
        placeholder="Password"
      />
      <TextInput
        value={Email}
        onChange={e => setEmail(e.target.value)}
        placeholderTextColor="black"
        style={styles.input3}
        placeholder="Email"
      />
      <TextInput
        value={Address}
        onChange={e => setAddress(e.target.value)}
        placeholderTextColor="black"
        style={styles.input4}
        placeholder="Address"
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: 'black' }}><b>Login</b></Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={submit} >
        <Text  onPress={() => {navigation.navigate("Login")}} style={styles.signupbtns}><b>Sign Up</b></Text>
      </TouchableOpacity>

      <Text style={{ color: '#ffffff', position: 'absolute', top: 520, textAlign: 'center' }}>
        <b><i>Enter the Correct Information and <br />Create Your Account </i></b></Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 900,
    backgroundColor: '#181718',
  },
  input1: {
    marginTop: '50%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    color: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  input2: {
    marginTop: '8%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  input3: {
    marginTop: '8%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  input4: {
    marginTop: '8%',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
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
  // cercle:{
  //     width:'100%',
  //     height:'100%',
  //     backgroundColor:'#181718',
  //     // borderRadius:'50%',
  //     position:'absolute',
  //     top:'0',
  //     rotate: '20deg'
  //   },
  //   rectangle:{
  //     width:'109%',
  //     height:'40%',
  //     backgroundColor:'#181718',
  //     position:'absolute',
  //     top:'40.5%',
  //   }, 

  btn: {
    padding: 4,
    backgroundColor: '#f6c708',
    height: 38.1,
    width: 239,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    borderRadius: 100,
    position: 'absolute',
    top: '56%',
    left: '20%',
    color: 'black',


  },
  signupbtns: {
    padding: 8,
    backgroundColor: '#93adb6',
    height: 38.1,
    width: 99,
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    color: 'black',
    marginTop: '354%',
    marginLeft: '-45%',
    textAlign: 'center',

    // fontSize: 20
  }

});