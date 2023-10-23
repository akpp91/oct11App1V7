import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button title="got to TrackDetails" 
      onPress={()=>{navigation.navigate('TrackDetailScreen')}}/>

    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})