import * as React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'



export default function Searchtab() {



    return (
        <View style={styles.container}>
            {/* <Image style={styles.iconView} source={require('../assets/lensIcon.png')} /> */}

            <TextInput style={styles.inputView}
                placeholder='Search for a Service'>
                <Icon style={styles.iconView} name='search' size={24} />
                Search For a Service
            </TextInput>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconView: {
        height: 20,
        width: 20,

    },
    inputView: {
        height: 40,
        width: '80%',
        borderRadius: 15,
        backgroundColor: '#fff',
        paddingTop: 1,
        paddingLeft: 15,
        borderBottomColor: 'black',
        borderEndColor: 'black',
        borderBottomWidth: 3,
        borderWidth: 1,
        justifyContent: 'space-between'
    }
})