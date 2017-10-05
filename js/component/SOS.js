import React, {
    Component,
} from 'react'
import SendSMS from 'react-native-sms'
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

import ambulance from '../resources/image/sos/ambulance.png'
import first_aid_kit from '../resources/image/sos/first_aid_kit.png'
import message from '../resources/image/sos/message.png'
import sos from '../resources/image/sos/sos.png'
import call from 'react-native-phone-call'
const dataList = [
    {
        icon: ambulance,
        title: 'AMBULANCE',
    },
    {
        icon: sos,
        title: 'SOS',
    },
    {
        icon: first_aid_kit,
        title: 'Fist-aid',},
    {
        icon: message,
        title: 'EmergencyMessage',
    },


]

const columnCount = 2
const args1 = {
    number: '911', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}
const args2 = {
    number: '000', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}
export default class SOS extends Component {

    render () {
        return (
            <ScrollView style={{marginTop: 0, backgroundColor: '#fff', }}>
                <View style={{height: 30, paddingLeft: 10, backgroundColor: '#fff', justifyContent: 'center',color: '#bb1213',
                    alignItems: 'center',
                }}>
                    <Text>
                        Please Calm Down!
                    </Text>
                </View>
                <SudokuGrid
                    containerStyle={{ backgroundColor: '#fff'}}
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

                </View>
            </TouchableHighlight>
        )
    }




    _onPressCell (data, index) {

        switch (index) {
            case 0:
                return call(args1).catch(console.error);
            case 1:
                return call(args2).catch(console.error);
            case 2:
                return Actions.FirstAid();
            case 3:
                return
                SendSMS.send({
                    body: 'The default body of the SMS!',
                    recipients: ['0123456789', '9876543210'],
                    successTypes: ['sent', 'queued']
                }, (completed, cancelled, error) => {

                    console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

                });;

        }
    }



}


