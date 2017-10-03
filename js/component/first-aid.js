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
import {Actions} from 'react-native-router-flux';
import SudokuGrid from 'react-native-smart-sudoku-grid';
import CornerLabel from 'react-native-smart-corner-label';

import bandage1 from '../resources/image/bandage/bandage1.png';
import bandage2 from '../resources/image/bandage/bandage2.png';
import bandage3 from '../resources/image/bandage/bandage3.png';
import bandage4 from '../resources/image/bandage/bandage4.png';
import bandage5 from '../resources/image/bandage/bandage5.png';
import bandage6 from '../resources/image/bandage/bandage6.png';
import bandage7 from '../resources/image/bandage/bandage7.png';
import bandage8 from '../resources/image/bandage/bandage8.png';
import bandage9 from '../resources/image/bandage/bandage9.png';

const dataList = [
    {
        icon: bandage1,
        title: 'bandage1',
    },
    {
        icon: bandage2,
        title: 'bandage2',
    },
    {
        icon: bandage3,
        title: 'bandage3',
    },
    {
        icon: bandage4,
        title: 'bandage4',
    },
    {
        icon: bandage5,
        title: 'bandage5',
    },
    {
        icon: bandage6,
        title: 'bandage6',
    },
    {
        icon: bandage7,
        title: 'bandage7',
    },
    {
        icon: bandage8,
        title: 'bandage8',
    },
    {
        icon: bandage9,
        title: 'bandage9',
    },
]

const columnCount = 3

export default class FirstAid extends Component {

    render() {
        return (
            <ScrollView style={{marginTop: 0, backgroundColor: '#fff',}}>
                <View style={{
                    height: 30, paddingLeft: 10, backgroundColor: '#E1E5E8', justifyContent: 'center', color: '#bb1213',
                    alignItems: 'center',
                }}>
                    <Text>
                        Please Calm Down!
                    </Text>
                </View>
                <SudokuGrid
                    containerStyle={{backgroundColor: '#fff',}}
                    columnCount={columnCount}
                    dataSource={dataList}
                    renderCell={this._renderGridCell}
                />
            </ScrollView>
        )
    }

    _renderGridCell = (data, index, list) => {
        return (
            <TouchableHighlight underlayColor={'#eee'} onPress={this._onPressCell.bind(this, data, index)}>
                <View style={{
                    overflow: 'hidden',
                    justifyContent: 'center', alignItems: 'center', height: 100,
                    borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#eee',
                    borderRightWidth: (index + 1) % columnCount ? StyleSheet.hairlineWidth : 0,
                }}>
                    <Image source={data.icon} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
                    <Text>{data.title}</Text>
                    {index == 6 ?
                        <CornerLabel
                            cornerRadius={54}
                            style={{backgroundColor: 'red', height: 24,}}
                            textStyle={{color: '#fff',}}>
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

    _onPressCell(data, index) {

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


