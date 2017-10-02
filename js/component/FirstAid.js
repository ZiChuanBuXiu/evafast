import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, Text, View,StyleSheet} from "react-native";

let images = {
    component: {
            images: [require("../image/Tool/firstAid/firstaidkit.jpeg.jpeg")]
}}


class component extends Component {
    render() {
        return (
            <View>
                <Text style={styles.titleText}>{this.props.instruction}</Text>
                {images.firstaid[this.props.typeName].images.map(function (image) {
                    return (<Image source={image}/>)
                })}
            </View>
        );
    }
}

component.propTypes = {
    component: PropTypes.string,
    typeName: PropTypes.string
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default component;