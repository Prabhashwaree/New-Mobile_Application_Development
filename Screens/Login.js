/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet, TouchableOpacity,Image} from 'react-native';
import React from 'react';


export default function Login({navigation}) {
  return (
    <View style={styles.container}>
        
      <Text  style={{color: '#181718', fontSize: 50,  position:'absolute',top:70}}> <b><i>Login</i></b></Text>
      
     
  <View style={styles.cercle}></View>
  <View style={styles.rectangle}></View>
  <Image
  source={require("../assets/car.png")}
  style={{ width: 460, height: 460 ,position:'absolute',left:-60,top:70,rotate: '10deg'}}/>
    
    <TextInput placeholderTextColor="black" style={styles.input1} placeholder="Username" />
      <TextInput placeholderTextColor="black" style={styles.input2} placeholder="Password" />
      <TouchableOpacity style={styles.btn}>
        <Text  onPress={()=>{navigation.navigate("VehicalDetails")}} style={{color: 'black'}}><b>Login</b></Text>
      </TouchableOpacity>
      <TouchableOpacity>
              <Text onPress={()=>{navigation.navigate("Signup")}} style={styles.signupbtn}><b>Sign Up</b></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input1: {
    marginTop: '30%',
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 100,
    zIndex:2,
    backgroundColor:'#ffffff',
    position:'absolute',
    top:'38%',
  },
  input2: {
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius: 100,
    zIndex:2,
    backgroundColor:'#ffffff',
    position:'absolute',
    top:'57%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height:860,
    backgroundColor:'#f6c708',
    textAlign:'center'
    // width:'100%',
    
  },
  btn: {
    width: '60%',
    padding: 4,
    backgroundColor: '#f6c708',
    height: 38.1,
    width :99,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%',
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    position:'absolute',
    top:'59.1%',
    left:'50%',
    color: 'black',
   
  },
  signupbtn:{
    padding: 8,
    backgroundColor: '#93adb6',
    height: 38.1,
    width :99,
    alignItems: 'center',
    // justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    color: 'black',
    marginTop: '342%',
    marginLeft: '-45%',
    textAlign:'center',
    // fontSize: 20
  },
  cercle:{
    width:'100%',
    height:'40%',
    backgroundColor:'#181718',
    borderRadius:'50%',
    position:'absolute',
    top:'30%',
  },
  rectangle:{
    width:'109%',
    height:'40%',
    backgroundColor:'#181718',
    position:'absolute',
    top:'40.5%',
  }
});