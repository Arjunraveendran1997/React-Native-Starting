import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Videos() {

    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Video</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    homeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }
})