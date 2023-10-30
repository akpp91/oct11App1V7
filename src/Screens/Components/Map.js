import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  
 const {
  state: {currentLocation ,  location}
} =useContext(LocationContext);




    if (currentLocation) {
    const { coords }=currentLocation;
  }


  coords = currentLocation
    ? currentLocation.coords
    : {
        accuracy: 15,
        altitude: 478.932,
        heading: 318.5450134277344,
        latitude: 18.588673633333332,
        longitude: 73.74461396666668,
        speed: 0,
      };

 

  const [region, setRegion] = useState({
    latitude: 18.588673633333332, 
    longitude: 73.74461396666668, 
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,
  });

  // useEffect(() => {
  //   const tenMetersWithDegrees = 0.0001;
  //   let counter = 0;

  //   const updateRegion = () => {
      
  //     setLatitude( latitude + counter * tenMetersWithDegrees);
  //     setLongitude(longitude + counter * tenMetersWithDegrees);

  //     setRegion({
  //       ...region,
  //       latitude: latitude,
  //       longitude: longitude,
  //     });
  //     counter++;
  //   };

  //   const intervalId = setInterval(updateRegion, 1000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  const coordinates = 
  
  location.map(loc => ({
    latitude: loc.coords.latitude,
    longitude: loc.coords.longitude
  }));

 
  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      region={region}
    >
      <Circle
        center={coords}
        radius={10}
        fillColor="rgba(255,0,0,0.3)"
        strokeWidth={0.5}
      />
      <Polyline
      coordinates={coordinates}
      />
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
