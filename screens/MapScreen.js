import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
    const { stateName } = route.params;

    const stateCoordinates = {
        Alabama: { latitude: 32.806671, longitude: -86.791130 },
        Alaska: { latitude: 61.370716, longitude: -152.404419 },
        Arizona: { latitude: 34.048927, longitude: -111.093735 },
        California: { latitude: 36.778259, longitude: -119.417931 },
        Colorado: { latitude: 39.550051, longitude: -105.782067 },
        Connecticut: { latitude: 41.603221, longitude: -73.087749 },
        Delaware: { latitude: 38.910832, longitude: -75.527670 },
        Florida: { latitude: 27.994402, longitude: -81.760254 },
        Georgia: { latitude: 32.157435, longitude: -82.907123 },
        Hawaii: { latitude: 19.896766, longitude: -155.582779 },
        Idaho: { latitude: 44.068202, longitude: -114.742041 },
        Illinois: { latitude: 40.633125, longitude: -89.398528 },
        Indiana: { latitude: 40.551217, longitude: -85.602364 },
        Iowa: { latitude: 41.878003, longitude: -93.097702 },
        Kansas: { latitude: 39.011902, longitude: -98.484246 },
        Kentucky: { latitude: 37.839333, longitude: -84.270018 },
        Louisiana: { latitude: 30.984298, longitude: -91.962333 },
        Maine: { latitude: 45.253783, longitude: -69.445469 },
        Maryland: { latitude: 39.045755, longitude: -76.641271 },
        Massachusetts: { latitude: 42.407211, longitude: -71.382437 },
        Michigan: { latitude: 44.314844, longitude: -85.602364 },
        Minnesota: { latitude: 46.729553, longitude: -94.685900 },
        Mississippi: { latitude: 32.354668, longitude: -89.398528 },
        Missouri: { latitude: 37.964253, longitude: -91.831833 },
        Montana: { latitude: 46.879682, longitude: -110.362566 },
        Nebraska: { latitude: 41.492537, longitude: -99.901813 },
        Nevada: { latitude: 38.802610, longitude: -116.419389 },
        New_Hampshire: { latitude: 43.193852, longitude: -71.572395 },
        New_Jersey: { latitude: 40.058324, longitude: -74.405661 },
        New_Mexico: { latitude: 34.972730, longitude: -105.032363 },
        New_York: { latitude: 43.299428, longitude: -74.217933 },
        North_Carolina: { latitude: 35.759573, longitude: -79.019300 },
        North_Dakota: { latitude: 47.551493, longitude: -101.002012 },
        Ohio: { latitude: 40.417287, longitude: -82.907123 },
        Oklahoma: { latitude: 35.007752, longitude: -97.092877 },
        Oregon: { latitude: 43.804133, longitude: -120.554201 },
        Pennsylvania: { latitude: 41.203322, longitude: -77.194525 },
        Rhode_Island: { latitude: 41.580095, longitude: -71.477429 },
        South_Carolina: { latitude: 33.836081, longitude: -81.163725 },
        South_Dakota: { latitude: 43.969515, longitude: -99.901813 },
        Tennessee: { latitude: 35.517491, longitude: -86.580447 },
        Texas: { latitude: 31.968599, longitude: -99.901813 },
        Utah: { latitude: 39.320980, longitude: -111.093731 },
        Vermont: { latitude: 44.558803, longitude: -72.577841 },
        Virginia: { latitude: 37.431573, longitude: -78.656894 },
        Washington: { latitude: 47.751074, longitude: -120.740139 },
        West_Virginia: { latitude: 38.597626, longitude: -80.454903 },
        Wisconsin: { latitude: 43.784440, longitude: -88.787868 },
        Wyoming: { latitude: 43.075968, longitude: -107.290284 },
    };

    const defaultRegion = {
        latitude: 37.0902,
        longitude: -95.7129,
        latitudeDelta: 5,
        longitudeDelta: 5,
    };

    const region = stateCoordinates[stateName] || defaultRegion;

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 5,
                    longitudeDelta: 5,
                }}
            >
                <Marker
                    coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                    title={stateName}
                />
            </MapView>
            <Text style={styles.mapTitle}>Map of {stateName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    mapTitle: {
        padding: 10,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default MapScreen;
