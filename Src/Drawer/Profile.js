import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {

    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>This is Profile Page</Text>
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
    profileText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }
})