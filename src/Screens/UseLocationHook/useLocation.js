import { useEffect, useState, useRef, useContext } from "react";
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';


export default (isFocused, state, callback) => {
  const [err, setErr] = useState(null);
  const [watchId1, setWatchId] = useState(0); 
  

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) 
      {
        const watchId = Geolocation.watchPosition(
          callback,
          (error) => {
            console.log("Error in watchPosition:", error);
            setErr(error);
          },
          {
            distanceFilter: 0,
            interval: 500
          }
          
        );
        

        setWatchId(watchId)
        if (watchId1 > 0) {
          Geolocation.clearWatch(1);  
        }

      } 
      else {
        console.log('GPS permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

 

  useEffect(() => {
    
    if ( isFocused && state.recording ) {
      requestLocationPermission();
    } else {
        Geolocation.clearWatch(0);
    }
  }, [isFocused ,state.recording]);

  return [err];
};
