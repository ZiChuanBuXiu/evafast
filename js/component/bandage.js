import React, {Component} from 'react';
import PropTypes from 'prop-types';

var Dimensions = require('Dimensions');


import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';


let image = require("../resources/image/bandage/1.jpeg");
let Video1 = require("../resources/video/UseOfExtinguisher.mp4");

const Bandage = () => {
    return (

        <View style={styles.container}>
            <Text
                style={styles.welcome}
            >
                bandage
            </Text>
        </View>
    );
}

Bandage.propTypes = {
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
        width: Dimensions.get('window').width,
        height: 150
    },
    backgroundVideo: {
        position: 'absolute',
        top: 50,
        left: 0,
        bottom: 50,
        right: 0,
    }
});

export default Bandage;
