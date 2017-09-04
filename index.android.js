/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet
} from 'react-native';

class AndroidApp extends Component {
    render() {
        return (
            <Image source={require('./img_source/extinguisher.png')} style={styles.large_pic}/>
        );
    }
}

const styles = StyleSheet.create({
    large_pic: {
        width: 310,
        height: 220,
    }
});

AppRegistry.registerComponent('AndroidApp', () => AndroidApp);
