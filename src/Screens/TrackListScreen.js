import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const TrackListScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>TrackListScreen</Text>
      <Button title="got to TrackDetails" 
      onPress={()=>{navigation.navigate('TrackDetailScreen')}}/>

    </SafeAreaView>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})