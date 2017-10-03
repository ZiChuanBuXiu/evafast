/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import MapExample from "./js/page/map";
import {Router, Scene} from "react-native-router-flux";
import Extinguisher from "./js/component/extinguisher";
import FirstAid from "./js/component/first-aid";
import Bandage from "./js/component/bandage";
import BlueScreen from "./js/component/blue-screen";



const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
};

const AndroidApp = () => {
    return (
        <Router>
            <Scene key="root">
                {/* Tab Container */}
                <Scene
                    key="tabbar"
                    tabs={true}
                    tabBarStyle={{ backgroundColor: '#FFFFFF',
                    }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key="Map" title="MAP" icon={TabIcon}>
                        <Scene
                            key="HomePage"
                            component={MapExample}
                            title="MAP"
                            initial
                        />

                        <Scene
                            key="FirstAid"
                            component={FirstAid}
                            title="FirstAid"
                        />
                        <Scene
                            key="Bandage"
                            component={Bandage}
                            title="Bandage"
                        />
                    </Scene>

                    <Scene key="um" title="Pacman" icon={TabIcon}>
                        <Scene
                            key="Blue"
                            component={BlueScreen}
                            title="Pacman"
                            initial
                        />
                        <Scene
                            key="FirstAid"
                            component={FirstAid}
                            title="FirstAid"
                        />
                    </Scene>

                    <Scene key="um2" title="UM2" icon={TabIcon}>
                        <Scene
                            key="FirstAid1"
                            component={FirstAid}
                            title="FirstAid1"
                            initial
                        />
                        <Scene
                            key="Extinguisher"
                            component={Extinguisher}
                            title="How to use Extinguisher"
                        />
                    </Scene>

                    {/* Removed for brevity */}
                </Scene>
            </Scene>
        </Router>
    );
}

AppRegistry.registerComponent('AndroidApp', () => AndroidApp);
