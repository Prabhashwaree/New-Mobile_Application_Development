/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { View, Text,TextInput,Button,StyleSheet,Alert, TouchableOpacity,Image,} from 'react-native';
import React , { useState } from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export default function Login() {

  const [carOb , setCarOb] =new useState(
    {
      image:'',
      Reg_Number:'',
      Brand:'',
      Price:'',
      Fuel_Type:'',
      Date:'',
      Location:''
    }
  );

 

  return (
    <View style={styles.container}>
      <Text style={styles.topic}><b><i>Add Vehicals</i></b></Text>

      <View style={styles.VCercle}></View>
      <View style={styles.VRectangle}></View>

      <TextInput 
       onChangeText={e => {
        setCarOb(prevState => {
          return {
            ...carOb,
            Reg_Number: e,
          };
        });
      }}
      placeholderTextColor="black" style={styles.input} placeholder="Register No" />
      <TextInput 
       onChangeText={e => {
        setCarOb(prevState => {
          return {
            ...carOb,
            Brand: e,
          };
        });
      }}
      placeholderTextColor="black" style={styles.input2} placeholder="Brand" />
      <TextInput
        onChangeText={e => {
          setCarOb(prevState => {
            return {
              ...carOb,
              Price: e,
            };
          });
        }}
        value={carOb.Price}
     
      placeholderTextColor="black" style={styles.input3} placeholder="Price" />
      <TextInput
       onChangeText={e => {
        setCarOb(prevState => {
          return {
            ...carOb,
            Fuel_Type: e,
          };
        });
      }}
      value={carOb.Fuel_Type}
      placeholderTextColor="black" style={styles.input4} placeholder="Fuel Type" />
      <TextInput
       onChangeText={e => {
        setCarOb(prevState => {
          return {
            ...carOb,
            Date: e,
          };
        });
      }}
      value={carOb.Date}
       placeholderTextColor="black" style={styles.input5} placeholder="Date" />
      <TextInput
      onChangeText={e => {
        setCarOb(prevState => {
          return {
            ...carOb,
            Location: e,
          };
        });
      }}
      value={carOb.Location}
      placeholderTextColor="black" style={styles.input6} placeholder="Location" />
      
      <TouchableOpacity style={styles.btn}
       onPress={async e => {
        console.log(carOb);
        const res = await fetch('http://localhost:4000/Vehicle', {
          method: 'POST',
          body: JSON.stringify(carOb),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        })
          .then(res => {
            console.log(res);
            Alert.alert('Car Saved Successfully');
          })
          .catch(res => {
            console.log(res);
            Alert.alert('Car Saving is Unsuccessful');
          });
      }}
      
      >
        <Text style={{color: '#ffffff', fontSize: 20}}> <b>Save</b></Text>
      </TouchableOpacity>
      <Text  style={{color: '#ffffff',zIndex:'2',position:'absolute',top:'16%',left:'7%',color:'black'}}>
        <b><i>Enter Your Details and Register Your <br /> Vehicle Today.</i></b></Text>
      <View style={styles.VCercle}></View>
      <TouchableOpacity style={styles.camBtn}
      onPress={async e => {
        const result = await launchImageLibrary({
          mediaType: 'photo',
          selectionLimit: 13,
        });
        let images = result.assets;
        images.forEach(e => {
          let uri = e.uri;
          console.log(uri);
          setCarOb(prevState => {
            return {
              ...carOb,
              image: uri,
            };
          });
        });
      }}
     >
        {/* <Text style={{color: '#ffffff', fontSize: 20}}></Text> */}
        <Image
  source={require("../assets/cam.png")}
  style={{ width: 50, height: 50 ,position:'absolute',left:'12%',top:'15%',rotate: '10deg'}}/>
    
      </TouchableOpacity>
      
      <Image
  source={require("../assets/car.png")}
  style={{ width: 250, height: 250 ,position:'absolute',left:'20%',top:'28%'}}/>
    
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
    zIndex:5
  },

});