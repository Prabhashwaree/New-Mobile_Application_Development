import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
    
} from 'react-native';
import React from 'react';

export default function VehicalDetails({navigation}) {
    return (
        <View style={styles.container}>

            <Text style={styles.VTopic}><b><i>Vehicals Details</i></b></Text>

            <View style={styles.container}></View>
            
            <TouchableOpacity style={styles.btn}>
        <Text onPress={()=>{navigation.navigate("AddVehicals")}} style={styles.Text}>Add New Car</Text>
      </TouchableOpacity>

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
    VTopic: {
        color: '#f6c708',
        fontSize: 30,
        marginRight: '35%',
        position: 'absolute',
        top: '8%'
    },
    btn: {
      backgroundColor: "yellow",
      height: 50,
      width: 300,
      alignItems: "center",
      justifyContent: "center",
      marginTop: "100%",
      position:'absolute',
      borderRadius: 12,
    }

});