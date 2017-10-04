import React, {Component} from 'react';

var Dimensions = require('Dimensions');
import Video from 'react-native-video';


import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


let Video1 = require("../resources/video/injection.mp4");

const injection = () => {
    return (

        <View style={styles.container}>


            <Video source={Video1} // Looks for .mp4 file (background.mp4) in the given expansion version.
                   rate={1.0}                   // 0 is paused, 1 is normal.
                   volume={1.0}                 // 0 is muted, 1 is normal.
                   muted={false}                // Mutes the audio entirely.
                   paused={false}               // Pauses playback entirely.
                   resizeMode="stretch"           // Fill the whole screen at aspect ratio.
                   repeat={false}                // Repeat forever.
                   onLoadStart={this.loadStart} // Callback when video starts to load
                   onLoad={this.setDuration}    // Callback when video loads
                   onProgress={this.setTime}    // Callback every ~250ms with currentTime
                   onEnd={this.onEnd}           // Callback when playback finishes
                   onError={this.videoError}    // Callback when video cannot be loaded
                   style={styles.backgroundVideo}/>


        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    welcome: {
        fontSize: 28,
        textAlignVertical: 'top',
        margin: 10,
        color: '#bb1213',
        alignItems: 'center',
        alignItems: 'center',
    },
    imgStyle: {
        width: Dimensions.get('window').width,
        height: 150
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default injection;