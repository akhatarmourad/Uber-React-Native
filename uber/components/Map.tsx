import { useLocationStore } from "@/store";
import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {

    /* Initial Region : Current Location */
    const { userLatitude, userLongitude, destinationLatitude, destinationLongitude } = useLocationStore();
    
    const region = {};

    const initRegion = {
        latitude: 34.01325,
        longitude: -6.8325,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    return (
        <MapView
            provider={PROVIDER_DEFAULT}
            className="h-[300px] w-full rounded-xl"
            tintColor="black"
            mapType="mutedStandard"
            initialRegion={initRegion}
            showsUserLocation={true}
            userLocationAnnotationTitle="You are here"
            showsPointsOfInterest={false}
            userInterfaceStyle="light"
            style={{ height: "100%", width: "100%" }}
        >
            <Text>Map</Text>
        </MapView>
    );
}

export default Map;