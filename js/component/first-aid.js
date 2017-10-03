import React, {
    Component,
} from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    Alert,
    Action
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import SudokuGrid from 'react-native-smart-sudoku-grid'
import CornerLabel from 'react-native-smart-corner-label'

import Asthma_inhaler from '../resources/image/FirstAid/asthma_inhaler.png'
import Bandage from '../resources/image/FirstAid/bandage.png'
import Blood_transfussion from '../resources/image/FirstAid/blood_transfussion.png'
import Capsules from '../resources/image/FirstAid/capsules.png'
import Injecting from '../resources/image/FirstAid/injecting.png'
import Plasters from '../resources/image/FirstAid/plasters.png'
import Stethoscope from '../resources/image/FirstAid/stethoscope.png'
import Surgical_scissors from '../resources/image/FirstAid/surgical_scissors.png'
import Thermometer from '../resources/image/FirstAid/thermometer.png'

const dataList = [
    {
        icon: Asthma_inhaler,
        title: 'Asthma_inhaler',
    },
    {
        icon: Bandage,
        title: 'Bandage',
    },
    {
        icon: Blood_transfussion,
        title: 'Blood_transfussion',
    },
    {
        icon: Capsules,
        title: 'Capsules',
    },
    {
        icon: Injecting,
        title: 'Injecting',
    },
    {
        icon: Plasters,
        title: 'Plasters',
    },
    {
        icon: Stethoscope,
        title: 'Stethoscope',
    },
    {
        icon: Surgical_scissors,
        title: 'Surgical_scissors',
    },
    {
        icon: Thermometer,
        title: 'Thermometer',
    },
]

const columnCount = 3

export default class FirstAid extends Component {

    render () {
        return (
            <ScrollView style={{marginTop: 0, backgroundColor: '#fff', }}>
                <View style={{height: 30, paddingLeft: 10, backgroundColor: '#E1E5E8', justifyContent: 'center',color: '#bb1213',
                    alignItems: 'center',
                }}>
                    <Text>
                        Please Calm Down!
                    </Text>
                </View>
                <SudokuGrid
                    containerStyle={{ backgroundColor: '#fff',}}
                    columnCount={columnCount}
                    dataSource={dataList}
                    renderCell={this._renderGridCell}
                />
            </ScrollView>
        )
    }

    _renderGridCell = (data, index, list) => {
        return (
            <TouchableHighlight underlayColor={'#eee'} onPress={ this._onPressCell.bind(this, data, index) }>
                <View style={{ overflow: 'hidden',
                    justifyContent: 'center', alignItems: 'center', height: 100,
                    borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#eee',
                    borderRightWidth: (index + 1) % columnCount ? StyleSheet.hairlineWidth: 0, }}>
                    <Image source={data.icon} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
                    <Text>{data.title}</Text>
                    { index == 6 ?
                        <CornerLabel
                            cornerRadius={54}
                            style={{backgroundColor: 'red', height: 24,}}
                            textStyle={{color: '#fff', }}>
                            usefull
                        </CornerLabel> : index == 3 ?
                            <CornerLabel
                                alignment={'right'}
                                cornerRadius={54}
                                style={{backgroundColor: 'red', height: 24,}}
                                textStyle={{color: '#fff', fontSize: 12,}}>
                                useful
                            </CornerLabel> : null
                    }
                </View>
            </TouchableHighlight>
        )
    }

    _onPressCell (data, index) {

        switch (index) {
            case 0:
                return Actions.Extinguisher();
            case 1:
                return Actions.Bandage();
            case 2:
                return Actions.Bandage();
            case 3:
                return Actions.Bandage();
            case 4:
                return Actions.Bandage();
            case 5:
                return Actions.Bandage();
            case 6:
                return Actions.Bandage();
            case 7:
                return Actions.Bandage();
            case 8:
                return Actions.Bandage();
            case 9:
                return Actions.Bandage();
        }
    }



}


