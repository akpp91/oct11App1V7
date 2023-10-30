import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Input } from '@rneui/base';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from '../Spacer/spacer';
import { ButtonGroup } from '@rneui/themed';
import UseSaveTrack from '../UseLocationHook/UseSaveTrack';

export default  TrackForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(LocationContext);
  const { location, name, recording } = state;

  const [saveTrack] = UseSaveTrack();
  
  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} />
      </Spacer>
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer>
      {
        recording && location.length ?
        (<Button 
        title="save Track"
        onPress={saveTrack}
        />)
        :
        null
      }
       </Spacer>
    </>
  );
};
