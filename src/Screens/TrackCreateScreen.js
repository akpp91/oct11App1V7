import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import Map from './Components/Map';
import { Context as LocationContext } from './context/LocationContext';
import useLocation from './UseLocationHook/useLocation';



import { useIsFocused } from '@react-navigation/native';
import TrackForm from './Components/TrackForm';

const TrackCreateScreen = () => {
  
  const isFocused = useIsFocused();
  const { addLocation ,state} = useContext(LocationContext);
  const [err] = useLocation( isFocused , state,
    
  (location)=>
  {
    addLocation(location, state.recording)
  });
  
  
  return (  
    <View>
      <Text h3>Create a Track</Text>
      <Map />
      <TrackForm/>
    </View>
  );
};

export default TrackCreateScreen;
