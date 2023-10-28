import { Text } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View,PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const GeolocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const requestLocationPermission = async () => {
    granted = await PermissionsAndroid.
    request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);  
    if (granted) {
  
      Geolocation.getCurrentPosition(
        (position) => {
            console.log(position);
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );    
    }
  }
  
  useEffect(() => {
    
    requestLocationPermission()
  }, []);

    return (
      <View>
        <Text>Getting geolocation...</Text>
      </View>
    );
  };

export default GeolocationComponent;
