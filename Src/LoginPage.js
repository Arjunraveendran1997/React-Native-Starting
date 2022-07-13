import React, { Component, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native'



export default function LoginPage({ navigation }) {


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={require('../assets/bg.jpg')}>
                <Image style={styles.logoImg} source={require('../assets/logo.png')}>
                </Image>
                <Text style={styles.text}>Welcome to React Native</Text>
                <TextInput style={styles.inputView}
                    placeholder="Username..."
                    placeholderTextColor='black'>

                </TextInput>
                <TextInput style={styles.inputView}
                    placeholder="Password..."
                    placeholderTextColor='black'
                    secureTextEntry={true}>

                </TextInput>

                <TouchableHighlight style={styles.buttonView}
                    underlayColor='transparent'
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonView}
                    underlayColor="white"
                    onPress={() => navigation.navigate('Tab')}>

                    <Text style={styles.buttonText}>CLICK</Text>

                </TouchableHighlight>





            </ImageBackground>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    backgroundImg: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoImg: {
        height: 100,
        width: 100
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color: 'black'
    },
    inputView: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10
    },
    buttonView: {
        height: 30,
        width: 100,
        marginTop: 10,
        backgroundColor: 'green',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'black'
    }

})

