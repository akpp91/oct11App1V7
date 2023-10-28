import React, { useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';


const LocationComponent = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const watchPosition = async () => {
    Geolocation.watchPosition((position) => {
        console.log(position.coords.latitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <View>
      <Button title="Start Watching Location" onPress={watchPosition} />
      <Button title="Stop Watching Location" onPress={() => Geolocation.clearWatch()} />
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};

export default LocationComponent;
