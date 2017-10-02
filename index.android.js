/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Instruction from "./js/page/instruction";
import MapExample from "./js/page/map";
import  PageOne from "./js/page/PageOne"
import App from "./js/page/pageButton";




export default class AndroidApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <App/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffa82c',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('AndroidApp', () => AndroidApp);
