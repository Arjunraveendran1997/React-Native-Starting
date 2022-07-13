import React from "react";


import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    TextInput,
    TouchableHighlight
} from "react-native";

export default function RegisterPage() {


    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImg} source={require('../assets/netflix-bg.jpg')}>
                <Image style={styles.logo} source={require('../assets/netflixlogo.png')} />
                <TextInput style={styles.inputView}
                    placeholder='Username'
                    placeholderTextColor='black'
                />

                <TextInput style={styles.inputView}
                    placeholder='Password'
                    placeholderTextColor='black' />

                <TextInput style={styles.inputView}
                    placeholder='Email'
                    placeholderTextColor='black'
                    type='email' />

                <View style={styles.smallContainer}>
                    <TextInput style={styles.smallInputView}
                        placeholder="+91"
                        placeholderTextColor='black' />

                    <TextInput style={styles.numberInput}
                        placeholder='Phone number'
                        type='number'
                        keyboardType="numeric"
                        placeholderTextColor='black' />
                </View>

                <TouchableHighlight style={styles.buttonView}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableHighlight >




            </ImageBackground>


        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    },
    backgroundImg: {
        height: '100%',
        width: '100%',
        // justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        height: 75,
        width: 75,
        marginTop: 100
    },
    inputView: {
        height: 30,
        width: '50%',
        borderWidth: 1,
        marginTop: 7,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingLeft: 10,
        borderRadius: 10
    },
    smallContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: -15

    },
    smallInputView: {
        height: 30,
        width: 30,
        borderWidth: 1,
        backgroundColor: 'white',
        opacity: 0.5,
        paddingTop: 5,
        borderRadius: 10

    },
    numberInput: {
        height: 30,
        width: '50%',
        borderWidth: 1,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingLeft: 10,
        borderRadius: 10
    },
    buttonView: {
        height: 30,
        width: 100,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})