import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, Text, View,StyleSheet, TouchableOpacity} from "react-native";
import Video from "react-native-video";
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
            <TouchableOpacity>
                <View>
                    <Text style={styles.titleText}>{this.props.instruction}</Text>
                    {images.extinguisher[this.props.typeName].images.map(function (image) {
                        return (<Image source={image}/>)
                    })}
                </View>
            </TouchableOpacity>

        );
    }
}





Instruction.propTypes = {
    instruction: PropTypes.string,
    typeName: PropTypes.string
};

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Instruction;