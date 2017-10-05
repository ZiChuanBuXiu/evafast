/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text, View,
} from 'react-native';
import MapExample from "./js/page/map";
import {Router, Scene} from "react-native-router-flux";
import Extinguisher from "./js/component/extinguisher";
import asthmaInhaler from "./js/component/asthma-inhaler";
import FirstAid from "./js/component/first-aid";
import BlueScreen from "./js/component/blue-screen";
import GrayScreen from "./js/component/gray-screen";
import sos from "./js/component/SOS"

import Bandage from "./js/component/bandage";
import TriBandage from "./js/component/triangular-bandage";
import coldPack from "./js/component/cold-pack"
import thermonmeter from "./js/component/thermometer";
import stethoscope from "./js/component/stethoscope";
import injection from "./js/component/injection";
import treatShock from "./js/component/treat-shock";
import severBleeding from "./js/component/treat-sever-bleeding";
import burnAndScald from "./js/component/treat-burn-and-scald";



const TabIcon = ({title,t}) => {
    return (
        <Text>{title}</Text>,
            <Text style={{fontSize: 20,
                fontWeight: 'bold',
}
                }>{t}</Text>
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
                    tabBarStyle={{
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    {/* Tab and it's scenes */}
                    <Scene key=" " title="" t={'MAP'} icon={TabIcon}>
                        <Scene
                            key="HomePage"
                            component={MapExample}
                            title="MAP"
                            initial
                        />
                        <Scene
                            key="Extinguisher"
                            component={Extinguisher}
                            title="How to use Extinguisher"
                        />

                        <Scene
                            key="Bandage"
                            component={Bandage}
                            title="Bandage"
                        />
                    </Scene>

                    <Scene key="  " title="" t={'Pacman'} icon={TabIcon}>
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

                    <Scene key="   " title="" t={'SOS'} icon={TabIcon}>
                        <Scene
                            key="sosCall"
                            component={sos}
                            title="SOS"
                            initial
                        />
                        <Scene
                            key="gray2"
                            component={GrayScreen}
                            title="Gray3"
                        />
                        <Scene
                            key="FirstAid"
                            component={FirstAid}
                            title="FirstAid"
                        />
                        <Scene
                            key="asthmaInhaler"
                            component={asthmaInhaler}
                            title="How to use asthmaInhaler"
                        />
                        <Scene
                            key="triBandage"
                            component={TriBandage}
                            title="How to make a sling"
                        />
                        <Scene
                            key="coldPack"
                            component={coldPack}
                            title="How to use cold pack"
                        />
                        <Scene
                            key="thermonmeter"
                            component={thermonmeter}
                            title="How to use thermonmeter"
                        />
                        <Scene
                            key="stethoscope"
                            component={stethoscope}
                            title="How to use stethoscope"
                        />
                        <Scene
                            key="injection"
                            component={injection}
                            title="How to use injection"
                        />
                        <Scene
                            key="treatShock"
                            component={treatShock}
                            title="Tutorial of Treat Shock"
                        />
                        <Scene
                            key="severBleeding"
                            component={severBleeding}
                            title="Tutorial of Treat Sever Bleeding"
                        />
                        <Scene
                            key="burnAndScald"
                            component={burnAndScald}
                            title="Tutorial of Treat Burns and Scalds"
                        />
                    </Scene>

                    {/* Removed for brevity */}
                </Scene>
            </Scene>
        </Router>
    );
}

AppRegistry.registerComponent('AndroidApp', () => AndroidApp);
