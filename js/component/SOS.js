import React, { Component } from 'react';
import call from 'react-native-phone-call'
import PropTypes from 'prop-types';
var Dimensions = require('Dimensions');


import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const sos = () => {
    return (

        <View style={styles.container}>
            <Text
                style={styles.welcome}
                onPress={() => call(args).catch(console.error)} // New Code
            >
                Call 000
            </Text>
            <Text
                style={styles.welcome}
                onPress={() => Actions.FirstAid()} // New Code
            >
                FirstAid
            </Text>

        </View>

    );
}

const args = {
    number: '911', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}

// const args = {
//     number: '911', // String value with the number to call
//     prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
// }
// onPress={call(args).catch(console.error)}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#bb1213',
    },
});

export default sos;
