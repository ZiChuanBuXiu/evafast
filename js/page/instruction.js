import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Image, Text, View,StyleSheet} from "react-native";

let images = {
    Tool: {
        extinguisher1: {
            images: [require("../image/Tool/extinguisher1/1.png")]
        },
        extinguisher2: {
            images: [require("../image/Tool/extinguisher2/2.png")]
        },
        firstAid: {
            images:[require("../image/Tool/firstAid/firstaid.png")]
        },
        SosSign:{
            images:[require("../image/Tool/SosSign/SOS.svg.png")]
        }
    }

}




class Instruction extends Component {
    render() {
        return (
            <View>
                {/*<Text style={styles.singleimage}>{this.props.instruction}</Text>*/}
                {images.Tool[this.props.typeName].images.map(function (image) {
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
    singleimage:{
        backgroundColor:'#f0f8ff'
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        width:50,
        height:50
    },
});

export default Instruction;