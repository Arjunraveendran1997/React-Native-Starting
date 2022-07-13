import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
// import axios from "axios";


export default class Chapter extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    getData() {
        fetch('https://api.sampleapis.com/switch/games')
            .then((response) => response.json())
            .then((response) => {
                this.setState({ data: response })

            }).catch((error) => {
                console.log('Data error', error);
            })
    }

    componentDidMount() {
        this.getData()
    }


    render() {
        const renderItem = ({ item }) => (

            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDes}>{item.publishers}</Text>
            </View>
        )


        return (
            <View style={styles.container}>
                <Text onPress={() => this.getData()} style={styles.homeText}>Vines List</Text>
                <FlatList style={{ width: '95%', marginTop: 10 }}
                    data={this.state.data}
                    renderItem={renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d6568'
    },
    homeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 4,
        marginTop: 10,
        borderRadius: 10
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#000'

    },
    itemDes: {
        fontSize: 10,
        color: 'blue',
        fontWeight: 'bold'
    }
})