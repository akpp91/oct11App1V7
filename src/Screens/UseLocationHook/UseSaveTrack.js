import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as TrackContext} from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'
import { useNavigation } from '@react-navigation/native'

export default () =>{
    const {createTracks} = useContext(TrackContext);
    const {state:{location, name}, reset, stopRecording} =useContext(LocationContext);

    const navigation=useNavigation();
    const saveTrack =() =>{
        createTracks(name , location);
        reset();
        stopRecording();
        navigation.navigate("TrackListScreen");
    };

    return [saveTrack];
}

