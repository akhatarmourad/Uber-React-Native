import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {

    const initRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <MapView
            provider={PROVIDER_DEFAULT}
            className="w-full h-full rounded-xl"
            tintColor="black"
            mapType="mutedStandard"
            // initialRegion={initRegion}
            showsUserLocation={true}
            userLocationAnnotationTitle="You are here"
            showsPointsOfInterest={false}
            userInterfaceStyle="light"
        >
            <Text>Map</Text>
        </MapView>
    );
}

export default Map;