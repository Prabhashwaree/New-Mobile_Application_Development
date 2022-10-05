/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet, TouchableOpacity,} from 'react-native';
import React from 'react';


export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Add Vehicals</Text>

      
  
      <TextInput placeholderTextColor="black" style={styles.input} placeholder="Register No" />
      <TextInput placeholderTextColor="black" style={styles.input2} placeholder="Brand" />
      <TextInput placeholderTextColor="black" style={styles.input3} placeholder="Price" />
      <TextInput placeholderTextColor="black" style={styles.input4} placeholder="Fuel Type" />
      <TextInput placeholderTextColor="black" style={styles.input5} placeholder="Date" />
      <TextInput placeholderTextColor="black" style={styles.input6} placeholder="Location" />
      
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#ffffff', fontSize: 20}}> Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:860,
    backgroundColor:'#ffffff'
    // width:'100vw',
  },
  topic:{
    color: 'black', 
    fontSize: 30, 
    marginRight: '35%',
    marginTop:'-60%'
  },
  input:{
    marginTop: '70%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '38%',
    borderRadius: 10,
  },
  input2:{
    marginTop: '5%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '38%',
    borderRadius: 10,
  },
  input3:{
    marginTop: '5%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '38%',
    borderRadius: 10,
  },
  input4:{
    marginTop: '5%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '38%',
    borderRadius: 10,
  },
  input5:{
    marginTop: '-63%',
    borderWidth: 1,
    marginLeft: '40%',
    padding: 10,
    width: '50%',
    borderRadius: 10,
  },
  input6:{
    marginTop: '5%',
    borderWidth: 1,
    marginLeft: '40%',
    padding: 10,
    width: '50%',
    borderRadius: 10,
  },
  
  btn:{
    padding: 5,
    backgroundColor: 'green',
    height: 50,
    marginRight:'40%',
    width :200,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    borderRadius: 100,
  }
});