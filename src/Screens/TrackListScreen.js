import { StyleSheet, Text, View ,Button, FlatList, TouchableOpacity} from 'react-native'
import React, { useContext, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import { Context as TrackContext} from './context/TrackContext'
import { ListItem } from "react-native-elements";


const TrackListScreen = ({navigation}) => {
const isFocused = useIsFocused();

const { state,fetchTracks} = useContext(TrackContext); 


useEffect(()=>{
  
    fetchTracks();
  
  
},[isFocused])
  return (
    <SafeAreaView>
      
      <Text>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>
            {navigation.navigate('TrackDetailScreen' , {_id:item._id})
            }
          }>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />

    </SafeAreaView>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})