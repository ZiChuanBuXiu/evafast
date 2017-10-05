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
    Dimensions, Image, TouchableOpacity, Platform, TouchableWithoutFeedback
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ReactNativeARKit from "../component/ar-view";

const accessToken = 'pk.eyJ1IjoiZnlnMTk4NzYzMCIsImEiOiJjajc4aWoxOGsxcTVhMnFueHlzNzVwOXNwIn0.qDJUwUsopKe51x9tinsP3Q';
let width = Dimensions.get('window').width;
setAccessToken(accessToken);

class MapExample extends Component {
    state = {
        center: {
            latitude: -37.7996104,
            longitude: 144.9637586
        },
        zoom: 17,
        userTrackingMode: userTrackingMode.none,
        showsUserLocation: false,
        annotations: [
            {
                coordinates: [-37.7996104, 144.9637586],
                type: 'point',
                title: 'This is marker 1',
                subtitle: 'It has a rightCalloutAccessory too',
                rightCalloutAccessory: {
                    source: {uri: 'https://cldup.com/9Lp0EaBw5s.png'},
                    height: 25,
                    width: 25
                },
                annotationImage: {
                    source: {uri: 'https://cldup.com/CnRLZem9k9.png'},
                    height: 25,
                    width: 25
                },
                id: 'marker1'
            }, {
                coordinates: [40.714541341726175, -74.00579452514648],
                type: 'point',
                title: 'Important!',
                subtitle: 'Neat, this is a custom annotation image',
                annotationImage: {
                    source: {uri: 'https://cldup.com/7NLZklp8zS.png'},
                    height: 25,
                    width: 25
                },
                id: 'marker2'
            }, {
                coordinates: [[40.76572150042782, -73.99429321289062], [40.743485405490695, -74.00218963623047], [40.728266950429735, -74.00218963623047], [40.728266950429735, -73.99154663085938], [40.73633186448861, -73.98983001708984], [40.74465591168391, -73.98914337158203], [40.749337730454826, -73.9870834350586]],
                type: 'polyline',
                strokeColor: '#00FB00',
                strokeWidth: 4,
                strokeAlpha: .5,
                id: 'foobar'
            }, {
                coordinates: [[40.749857912194386, -73.96820068359375], [40.741924698522055, -73.9735221862793], [40.735681504432264, -73.97523880004883], [40.7315190495212, -73.97438049316406], [40.729177554196376, -73.97180557250975], [40.72345355209305, -73.97438049316406], [40.719290332250544, -73.97455215454102], [40.71369559554873, -73.97729873657227], [40.71200407096382, -73.97850036621094], [40.71031250340588, -73.98691177368163], [40.71031250340588, -73.99154663085938]],
                type: 'polygon',
                fillAlpha: 1,
                strokeColor: '#ffffff',
                fillColor: '#0000ff',
                id: 'zap'
            }],
        userLocation: {
            latitude: -37.7996104,
            longitude: 144.9637586
        }
    };

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

    addNewMarkers = () => {
        // Treat annotations as immutable and create a new one instead of using .push()
        this.setState({
            annotations: [...this.state.annotations, {
                coordinates: [40.73312, -73.989],
                type: 'point',
                title: 'This is a new marker',
                id: 'foo'
            }, {
                'coordinates': [[40.749857912194386, -73.96820068359375], [40.741924698522055, -73.9735221862793], [40.735681504432264, -73.97523880004883], [40.7315190495212, -73.97438049316406], [40.729177554196376, -73.97180557250975], [40.72345355209305, -73.97438049316406], [40.719290332250544, -73.97455215454102], [40.71369559554873, -73.97729873657227], [40.71200407096382, -73.97850036621094], [40.71031250340588, -73.98691177368163], [40.71031250340588, -73.99154663085938]],
                'type': 'polygon',
                'fillAlpha': 1,
                'fillColor': '#000000',
                'strokeAlpha': 1,
                'id': 'new-black-polygon'
            }]
        });
    };

    updateMarker2 = () => {
        // Treat annotations as immutable and use .map() instead of changing the array
        this.setState({
            annotations: this.state.annotations.map(annotation => {
                if (annotation.id !== 'marker2') {
                    return annotation;
                }
                return {
                    coordinates: [40.714541341726175, -74.00579452514648],
                    'type': 'point',
                    title: 'New Title!',
                    subtitle: 'New Subtitle',
                    annotationImage: {
                        source: {uri: 'https://cldup.com/7NLZklp8zS.png'},
                        height: 25,
                        width: 25
                    },
                    id: 'marker2'
                };
            })
        });
    };

    removeMarker2 = () => {
        this.setState({
            annotations: this.state.annotations.filter(a => a.id !== 'marker2')
        });
    };

    render() {
        StatusBar.setHidden(true);
        return (
            <View style={styles.container}>
                <ReactNativeARKit/>
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
                        id="annotation2"
                        coordinate={{latitude: -37.799424, longitude: 144.962668}}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}

                    >
                        {/*TODO implement onPress function, jump to the instruction page*/}
                        <TouchableOpacity
                            style={{width: 30, height: 30}}
                            onPress={() => {
                                Actions.FirstAid()
                            }}
                        >
                            <Image
                                style={{width: 30, height: 30}}
                                source={require("../resources/image/bandage/bandage1.png")}

                            />
                        </TouchableOpacity>
                    </Annotation>
                    <Annotation
                        id="user-position"
                        coordinate={this.state.userLocation}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}>
                        <Image
                            style={{width: 25, height: 25}}
                            source={require("../resources/image/bandage/bandage1.png")}
                        />
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