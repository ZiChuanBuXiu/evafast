import React, {Component} from 'react';
import Mapbox, {MapView} from 'react-native-mapbox-gl';
import {
    AppRegistry,
    StyleSheet,
    Text,
    StatusBar,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import {Annotation} from 'react-native-mapbox-gl';
import Instruction from './instruction';

const accessToken = 'pk.eyJ1IjoiZnlnMTk4NzYzMCIsImEiOiJjajc4aWoxOGsxcTVhMnFueHlzNzVwOXNwIn0.qDJUwUsopKe51x9tinsP3Q';
Mapbox.setAccessToken(accessToken);

let width = Dimensions.get('window').width;
let image = require("../image/extinguisher/type2/water-and-foam.jpg");
let type = 'type1';


class MapExample extends Component {
    state = {
        center: {
            latitude: -37.799326,
            longitude: 144.962737
        },
        zoom: 19,
        userTrackingMode: Mapbox.userTrackingMode.followWithCourse,
        showsUserLocation: true,
        myText:'original text'
    };

    updateText = () => {
        this.setState({myText: 'My Changed Text'})
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
        this._offlineProgressSubscription = Mapbox.addOfflinePackProgressListener(progress => {
            console.log('offline pack progress', progress);
        });
        this._offlineMaxTilesSubscription = Mapbox.addOfflineMaxAllowedTilesListener(tiles => {
            console.log('offline max allowed tiles', tiles);
        });
        this._offlineErrorSubscription = Mapbox.addOfflineErrorListener(error => {
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
        StatusBar.setHidden(false);
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
                        id="annotation1"
                        coordinate={{latitude: -37.799432, longitude: 144.962925}}
                        style={{alignItems: 'center', justifyContent: 'center', position: 'absolute'}}
                    >

                        <TouchableOpacity style={{
                            width: 20,
                            height: 20,
                            borderWidth: 4,
                            borderColor: 'blue',
                            borderRadius: 50,
                            backgroundColor: 'white',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={this.updateText}>
                            <Image
                                source={image}
                                style={{height: 25, width: 25}}
                            />
                        </TouchableOpacity>

                    </Annotation>
                </MapView>
                <Instruction
                    instruction={this.state.myText} typeName={type}/>
            </View>
        );
    }

    _renderButtons() {
        return (
            <View>
                <Text onPress={() => this._map && this._map.setDirection(0)}>
                    Set direction to 0
                </Text>
                <Text onPress={() => this._map && this._map.setZoomLevel(6)}>
                    Zoom out to zoom level 6
                </Text>
                <Text onPress={() => this._map && this._map.setCenterCoordinate(48.8589, 2.3447)}>
                    Go to Paris at current zoom level {parseInt(this.state.currentZoom)}
                </Text>
                <Text onPress={() => this._map && this._map.setCenterCoordinateZoomLevel(35.68829, 139.77492, 14)}>
                    Go to Tokyo at fixed zoom level 14
                </Text>
                <Text onPress={() => this._map && this._map.easeTo({pitch: 30})}>
                    Set pitch to 30 degrees
                </Text>
                <Text onPress={this.addNewMarkers}>
                    Add new marker
                </Text>
                <Text onPress={this.updateMarker2}>
                    Update marker2
                </Text>
                <Text onPress={() => this._map && this._map.selectAnnotation('marker1')}>
                    Open marker1 popup
                </Text>
                <Text onPress={() => this._map && this._map.deselectAnnotation()}>
                    Deselect annotation
                </Text>
                <Text onPress={this.removeMarker2}>
                    Remove marker2 annotation
                </Text>
                <Text onPress={() => this.setState({annotations: []})}>
                    Remove all annotations
                </Text>
                <Text
                    onPress={() => this._map && this._map.setVisibleCoordinateBounds(-37.7995375, 144.9625064, -37.7992616, 144.9631443)}>
                    Set visible bounds to 40.7, -74.2, 40.7, -74.1
                </Text>
                <Text onPress={() => this.setState({userTrackingMode: Mapbox.userTrackingMode.followWithHeading})}>
                    Set userTrackingMode to followWithHeading
                </Text>
                <Text onPress={() => this._map && this._map.getCenterCoordinateZoomLevel((location) => {
                    console.log(location);
                })}>
                    Get location
                </Text>
                <Text onPress={() => this._map && this._map.getDirection((direction) => {
                    console.log(direction);
                })}>
                    Get direction
                </Text>
                <Text onPress={() => this._map && this._map.getBounds((bounds) => {
                    console.log(bounds);
                })}>
                    Get bounds
                </Text>
                <Text onPress={() => {
                    Mapbox.addOfflinePack({
                        name: 'test',
                        type: 'bbox',
                        bounds: [0, 0, 0, 0],
                        minZoomLevel: 0,
                        maxZoomLevel: 0,
                        metadata: {anyValue: 'you wish'},
                        styleURL: Mapbox.mapStyles.dark
                    }).then(() => {
                        console.log('Offline pack added');
                    }).catch(err => {
                        console.log(err);
                    });
                }}>
                    Create offline pack
                </Text>
                <Text onPress={() => {
                    Mapbox.getOfflinePacks()
                        .then(packs => {
                            console.log(packs);
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }}>
                    Get offline packs
                </Text>
                <Text onPress={() => {
                    Mapbox.suspendOfflinePack('test')
                        .then(info => {
                            if (info.suspended) {
                                console.log('Suspended', info.suspended);
                            } else {
                                console.log('No packs to suspend');
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }}>
                    Pause/Suspend pack with name 'test'
                </Text>
                <Text onPress={() => {
                    Mapbox.resumeOfflinePack('test')
                        .then(info => {
                            if (info.resumed) {
                                console.log('Resumed', info.resumed);
                            } else {
                                console.log('No packs to resume');
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }}>
                    Resume pack with name 'test'
                </Text>
                <Text onPress={() => {
                    Mapbox.removeOfflinePack('test')
                        .then(info => {
                            if (info.deleted) {
                                console.log('Deleted', info.deleted);
                            } else {
                                console.log('No packs to delete');
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }}>
                    Remove pack with name 'test'
                </Text>
                <Text>User tracking mode is {this.state.userTrackingMode}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: width,
        flex: 2
    },
    scrollView: {
        flex: 1
    }
});

export default MapExample;