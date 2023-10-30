import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as TrackContext} from './context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';


const TrackDetailScreen = ({navigation, route}) => {
  const _id= route.params?._id;
  const {state}=useContext(TrackContext);


  const track = state.find(t => t._id === _id)
  const initialCoards= track.locations[0].coords;
  return (
    <View>
      <Text>{track.name}</Text>
      <MapView 
      initialRegion={{
        longitudeDelta:0.01,
        latitudeDelta:0.01,
...initialCoards
      }}
      style={styles.map}
      >
        <Polyline
        coordinates={track.locations.map(loc => loc.coords)}
        />
      </MapView>
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map:{
    height:700,
    
  }
})