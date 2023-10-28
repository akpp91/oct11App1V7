import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Define a functional component called MapScreen
const MapScreen = () => {
  // Use the useState hook to store the region state
  const [region, setRegion] = React.useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Define a function to handle region change
  const onRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  // Return the JSX element to render
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChange={onRegionChange}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="My Location"
          description="This is where I am"
        />
      </MapView>
    </View>
  );
};

// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// Export the component
export default MapScreen;