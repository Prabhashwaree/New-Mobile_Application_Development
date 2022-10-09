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

export default function VehicalDetails() {
    return (
        <View style={styles.container}>

            <Text style={styles.VTopic}><b><i>Add Vehicals</i></b></Text>

            <View style={styles.container}></View>


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
    }

});