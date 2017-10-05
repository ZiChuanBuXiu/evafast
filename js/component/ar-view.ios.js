import React, { Component } from 'react';
import { View } from 'react-native';
import { ARKit } from 'react-native-arkit';

export default class ReactNativeARKit extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ARKit
                    style={{ flex: 1 }}
                    debug
                    planeDetection
                    lightEstimation
                    onPlaneDetected={console.log} // event listener for plane detection
                    onPlaneUpdate={console.log} // event listener for plane update
                >

                    <ARKit.Cone
                        position={{ x: 0, y: 0.2, z: 0 }}
                        shape={{ topR: 0, bottomR: 0.05, height: 0.1 }}
                    />
                    <ARKit.Pyramid
                        position={{ x: 0.2, y: 0.15, z: 0 }}
                        shape={{ width: 0.1, height: 0.1, length: 0.1 }}
                    />
                    <ARKit.Tube
                        position={{ x: 0.4, y: 0.2, z: 0 }}
                        shape={{ innerR: 0.03, outerR: 0.05, height: 0.1 }}
                    />
                    <ARKit.Torus
                        position={{ x: 0, y: 0.4, z: 0 }}
                        shape={{ ringR: 0.06, pipeR: 0.02 }}
                    />
                    <ARKit.Capsule
                        position={{ x: 0.2, y: 0.4, z: 0 }}
                        shape={{ capR: 0.02, height: 0.06 }}
                    />
                    <ARKit.Plane
                        position={{ x: 0.4, y: 0.4, z: 0 }}
                        shape={{ width: 0.1, height: 0.1 }}
                    />
                    <ARKit.Text
                        text="ARKit is Cool!"
                        position={{ x: 0.2, y: 0.6, z: 0 }}
                        font={{ size: 0.15, depth: 0.05 }}
                    />
                    <ARKit.Model
                        position={{ x: -0.2, y: 0, z: 0, frame: 'local' }}
                        model={{
                            file: 'art.scnassets/ship.scn', // make sure you have the model file in the ios project
                            scale: 0.01,
                        }}
                    />
                </ARKit>
            </View>
        );
    }
}