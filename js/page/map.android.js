import React, {Component} from 'react';
import {
    setAccessToken,
    MapView, userTrackingMode,
    addOfflinePackProgressListener,
    addOfflineErrorListener,
    addOfflineMaxAllowedTilesListener,
    Annotation
} from 'react-native-mapbox-gl';
import {
    StyleSheet,
    StatusBar,
    View,
    Dimensions, Image, TouchableOpacity, Platform, TouchableWithoutFeedback, ActivityIndicator, Text
} from 'react-native';
import {Actions} from 'react-native-router-flux';


const accessToken = 'pk.eyJ1IjoiZnlnMTk4NzYzMCIsImEiOiJjajc4aWoxOGsxcTVhMnFueHlzNzVwOXNwIn0.qDJUwUsopKe51x9tinsP3Q';
let width = Dimensions.get('window').width;
setAccessToken(accessToken);

class MapExample extends Component {
    state = {
        center: {
            latitude: -37.799441,
            longitude: 144.962952
        },
        zoom: 18,
        userTrackingMode: userTrackingMode.none,
        showsUserLocation: false,
        userLocation: {
            latitude: -37.799441,
            longitude: 144.962952
        },
        isLoading: true
    };


    componentDidMount() {
        return fetch('http://mobile.kancolle.moe/api/map/download?building-id=1', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onRegionDidChange = (location) => {
        this.setState({currentZoom: location.zoomLevel});
        console.log('onRegionDidChange', location);
    };
    onRegionWillChange = (location) => {
        console.log('onRegionWillChange', location);
    };
    onUpdateUserLocation = (location) => {
        console.log('onUpdateUserLocation', location);
    };
    onOpenAnnotation = (annotation) => {
        console.log('onOpenAnnotation', annotation);
    };
    onRightAnnotationTapped = (e) => {
        console.log('onRightAnnotationTapped', e);
    };
    onLongPress = (location) => {
        console.log('onLongPress', location);
    };
    onTap = (location) => {
        console.log('onTap', location);
    };
    onChangeUserTrackingMode = (userTrackingMode) => {
        this.setState({userTrackingMode});
        console.log('onChangeUserTrackingMode', userTrackingMode);
    };

    componentWillMount() {
        this._offlineProgressSubscription = addOfflinePackProgressListener(progress => {
            console.log('offline pack progress', progress);
        });
        this._offlineMaxTilesSubscription = addOfflineMaxAllowedTilesListener(tiles => {
            console.log('offline max allowed tiles', tiles);
        });
        this._offlineErrorSubscription = addOfflineErrorListener(error => {
            console.log('offline error', error);
        });
    }

    componentWillUnmount() {
        this._offlineProgressSubscription.remove();
        this._offlineMaxTilesSubscription.remove();
        this._offlineErrorSubscription.remove();
    }

    render() {
        StatusBar.setHidden(false);
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        console.log(this.state.dataSource);
        return (
            <View style={styles.container}>

                <MapView
                    ref={map => {
                        this._map = map;
                    }}
                    style={styles.map}
                    initialCenterCoordinate={this.state.center}
                    initialZoomLevel={this.state.zoom}
                    initialDirection={0}
                    rotateEnabled={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    showsUserLocation={false}
                    styleURL={'mapbox://styles/fyg1987630/cj78im8ju7a6e2rpbvt3lqok7'}
                    userTrackingMode={this.state.userTrackingMode}
                    annotations={this.state.annotations}
                    annotationsAreImmutable
                    onChangeUserTrackingMode={this.onChangeUserTrackingMode}
                    onRegionDidChange={this.onRegionDidChange}
                    onRegionWillChange={this.onRegionWillChange}
                    onOpenAnnotation={this.onOpenAnnotation}
                    onRightAnnotationTapped={this.onRightAnnotationTapped}
                    onUpdateUserLocation={this.onUpdateUserLocation}
                    onLongPress={this.onLongPress}
                    onTap={this.onTap}
                >
                    <Annotation
                        id="fire-extinguisher"
                        coordinate={{
                            latitude: this.state.dataSource.data.items["fire-extinguisher"][0].coordinates.latitude,
                            longitude: this.state.dataSource.data.items["fire-extinguisher"][0].coordinates.longitude
                        }}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}

                    >
                        {/*TODO implement onPress function, jump to the instruction page*/}
                        <TouchableOpacity
                            style={{width: 30, height: 30}}
                            onPress={() => {
                                Actions.Extinguisher()
                            }}
                        >
                            <Image
                                style={{width: 30, height: 30}}
                                source={require("../resources/image/bandage/bandage1.png")}

                            />
                        </TouchableOpacity>
                    </Annotation>
                    <Annotation
                        id={"user"}
                        coordinate={this.state.userLocation}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
                        <Image
                            style={{width: 35, height: 35}}
                            source={require("../resources/image/user/man.png")}
                        />
                    </Annotation>
                    <Annotation
                        id={"exit"}
                        coordinate={{
                            latitude: this.state.dataSource.data.items["exit"][0].coordinates.latitude,
                            longitude: this.state.dataSource.data.items["exit"][0].coordinates.longitude
                        }}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
                        <Image
                            style={{width: 35, height: 35}}
                            source={require("../resources/image/building/exit.png")}
                        />
                    </Annotation>
                    <Annotation
                        id={"first-aid"}
                        coordinate={{
                            latitude: this.state.dataSource.data.items["first-aid"][0].coordinates.latitude,
                            longitude: this.state.dataSource.data.items["first-aid"][0].coordinates.longitude
                        }}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
                        <TouchableOpacity
                            style={{width: 30, height: 30}}
                            onPress={() => {
                                Actions.FirstAid()
                            }}
                        >
                            <Image
                                style={{width: 30, height: 30}}
                                source={require("../resources/image/building/first-aid.png")}
                            />
                        </TouchableOpacity>
                    </Annotation>
                </MapView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    map: {
        flex: 1,
        width: width
    },
    scrollView: {
        flex: 1
    }
});

export default MapExample;