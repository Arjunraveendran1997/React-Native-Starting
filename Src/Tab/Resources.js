import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Resources() {

    return (
        <View style={styles.container}>
            <Text style={styles.homeText}>Resources</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    homeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }
})