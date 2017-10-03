import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Dimensions = require('Dimensions');


import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const HomePage = () => {
    return (

        <View style={styles.container}>
            <Text
                style={styles.welcome}
                onPress={() => Actions.Extinguisher()} // New Code
            >
               Extinguisher
            </Text>
            <Text
                style={styles.welcome}
                onPress={() => Actions.FirstAid()} // New Code
            >
                First aid
            </Text>
        </View>
    );
}

HomePage.propTypes = {
    instruction: PropTypes.string,
    typeName: PropTypes.string
};


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
    imgStyle: {
        width:Dimensions.get('window').width,
        height:150
    },
});

export default HomePage;
