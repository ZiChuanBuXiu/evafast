import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux'; // New code

const BlueScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'PASS'}} style={{width: 100, height: 100}}/>
            <Text
                style={styles.welcome}
                onPress={() => Actions.Blue()} // New Code
            >
                Gray Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb1213',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default BlueScreen;
