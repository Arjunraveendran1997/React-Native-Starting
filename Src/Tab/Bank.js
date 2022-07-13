import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Bank() {

    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Bank</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    homeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }
})