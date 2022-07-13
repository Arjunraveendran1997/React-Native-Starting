import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home(){

    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>This is Home Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'
    },
    homeText:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    }
})