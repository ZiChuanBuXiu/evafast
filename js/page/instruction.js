import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, Text, View,StyleSheet} from "react-native";

let images = {
    extinguisher: {
        type1: {
            images: [require("../image/extinguisher/type1/1.jpeg")]
        },
        type2: {
            images: [require("../image/extinguisher/type2/water-and-foam.jpg")]
        }
    }
};


class Instruction extends Component {
    render() {
        return (
            <View>
                <Text style={styles.titleText}>{this.props.instruction}</Text>
                {images.extinguisher[this.props.typeName].images.map(function (image) {
                    return (<Image source={image}/>)
                })}
            </View>
        );
    }
}

Instruction.propTypes = {
    instruction: PropTypes.string,
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

export default Instruction;