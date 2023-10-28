import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const initialMockLocation = {
  coords: {
    latitude: 18.5886058, 
    longitude: 73.7445148, 
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitude: 5,
    altitudeAccuracy: 5,
  },
};

const LocationMocker = () => {
  const [location, setLocation] = useState(initialMockLocation);

  
  const startMockingLocation = () => {
    const watchID = Geolocation.watchPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10,
      }
    );

    // Simulate mock location changes
    const mockLocationInterval = setInterval(() => {
      // Increase the latitude and longitude for every time interval
      setLocation((prevLocation) => {
        const latitude = prevLocation.coords.latitude + 0.001; // Adjust the increment as needed
        const longitude = prevLocation.coords.longitude + 0.001; // Adjust the increment as needed
        return {
          coords: {
            latitude,
            longitude,
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitude: 5,
            altitudeAccuracy: 5,
          },
        };
      });
    }, 1000);

    // Clean up the watcher and interval when needed
    return () => {
      Geolocation.clearWatch(watchID);
      clearInterval(mockLocationInterval);
    };
  };

  
  return (
    <View>
      <Text>
        {location ? `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}` : 'No location data'}
      </Text>
      <Button title="Start Mocking Location" onPress={startMockingLocation} />
    </View>
  );
};

export default LocationMocker;
