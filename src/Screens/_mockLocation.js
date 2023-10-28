import Geolocation from '@react-native-community/geolocation';


const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    coords: {
      latitude: 18.5886058 + increment * tenMetersWithDegrees,
      longitude: 73.7445148 + increment * tenMetersWithDegrees,
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitude: 5,
      altitudeAccuracy: 5,
    },
  };
};

let counter = 0;
const watchId = Geolocation.watchPosition(
  (position) => {
    const locationData = {
      watchId,
      location: getLocation(counter),
    };
    counter++;
  },
  (error) => {
    console.error(error);
  },
  {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 1000,
    distanceFilter: 10,
  }
);
