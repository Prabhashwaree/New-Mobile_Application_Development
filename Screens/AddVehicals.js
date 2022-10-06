/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet, TouchableOpacity,Image,} from 'react-native';
import React from 'react';


export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.topic}><b><i>Add Vehicals</i></b></Text>

      <View style={styles.VCercle}></View>
      <View style={styles.VRectangle}></View>

      <TextInput placeholderTextColor="black" style={styles.input} placeholder="Register No" />
      <TextInput placeholderTextColor="black" style={styles.input2} placeholder="Brand" />
      <TextInput placeholderTextColor="black" style={styles.input3} placeholder="Price" />
      <TextInput placeholderTextColor="black" style={styles.input4} placeholder="Fuel Type" />
      <TextInput placeholderTextColor="black" style={styles.input5} placeholder="Date" />
      <TextInput placeholderTextColor="black" style={styles.input6} placeholder="Location" />
      
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: '#ffffff', fontSize: 20}}> <b>Save</b></Text>
      </TouchableOpacity>
      <Text style={{color: '#ffffff',zIndex:'2',position:'absolute',top:'16%',left:'7%',color:'black'}}>
        <b><i>Enter Your Details and Register Your <br /> Vehicle Today.</i></b></Text>
      <View style={styles.VCercle}></View>
      <TouchableOpacity style={styles.camBtn}>
        <Text style={{color: '#ffffff', fontSize: 20}}></Text>
        <Image
  source={require("../assets/cam.png")}
  style={{ width: 50, height: 50 ,position:'absolute',left:'12%',top:'15%',rotate: '10deg'}}/>
    
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:860,
    backgroundColor:'#f6c708',
    // width:'100vw',
  },
  topic:{
    color: 'black', 
    fontSize: 30, 
    marginRight: '35%',
   position:'absolute',
   top:'8%'
  },
  input:{
    marginTop: '80%',
    marginLeft: '9%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '42%',
    borderRadius: 10,
    backgroundColor:'#ffffff',
    zIndex:2
  },
  input2:{
    marginTop: '5%',
    marginLeft: '9%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '42%',
    borderRadius: 10,
    backgroundColor:'#ffffff',
    zIndex:2
  },
  input3:{
    marginTop: '5%',
    marginLeft: '9%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '42%',
    borderRadius: 10,
    backgroundColor:'#ffffff',
    zIndex:2
  },
  input4:{
    marginTop: '-12%',
    marginLeft: '96%',
    borderWidth: 1,
    marginRight: '56%',
    padding: 10,
    width: '42%',
    borderRadius: 10,
    backgroundColor:'#ffffff',
    zIndex:2
  },
  input5:{
    marginTop: '-44%',
    marginLeft: '74%',
    borderWidth: 1,
    marginLeft: '40%',
    padding: 10,
    width: '42%',
    borderRadius: 10,
    backgroundColor:'#ffffff',
    zIndex:2
  },
  input6:{
    marginTop: '5%',
    borderWidth: 1,
    marginLeft: '40%',
    padding: 10,
    width: '42%',
    borderRadius: 10,
    backgroundColor:'#ffffff',
    zIndex:2
  },
  
  btn:{
    padding: 5,
    backgroundColor: '#6e6e6e',
    height: 40,
    marginRight:'40%',
    width :110,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    marginLeft: '-18%',
    borderRadius: 15,
   
  },
  
  VCercle:{
    width:'100%',
    height:'40%',
    backgroundColor:'#181718',
    borderRadius:'50%',
    position:'absolute',
    top:'30%',
  },
  VRectangle:{
    width:'109%',
    height:'40%',
    backgroundColor:'#181718',
    position:'absolute',
    top:'40.5%',
  },
  camBtn:{
    padding: 5,
    backgroundColor: '#ffffff',
    height: 60,
    width :60,
    alignItems: 'center',
    justifyContent: 'center',
    position:'absolute',
    top:'29%',
    left:'65%',
    borderRadius: 100,
    
  },

});