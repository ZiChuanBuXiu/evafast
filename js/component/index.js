import React, { Component } from 'react';
import { Router, Scene, } from 'react-native-router-flux';//引入包
import {StyleSheet,Text,} from 'react-native';

import ScarletScreen from './scarlet-screen'; //引入文件
import GrayScreen from './gray-screen';//引入文件
import BlueScreen from './BlueScreen';//引入文件
import HomePage from './home-page';
import Extinguisher from './extinguisher';
import FirstAid from "./first-aid";
import Bandage from "./bandage"

//引入文件

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
};

const App = () => {
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
                            component={HomePage}
                            title="MAP"
                            initial
                        />
                        <Scene
                            key="Extinguisher"
                            component={Extinguisher}
                            title="How to use Extinguisher"
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
                            key="gray2"
                            component={ScarletScreen}
                            title="gray2"
                            initial
                        />
                        <Scene
                            key="gray2"
                            component={GrayScreen}
                            title="Gray3"
                        />
                    </Scene>

                    {/* Removed for brevity */}
                </Scene>
            </Scene>
        </Router>
    );
}

export default App;