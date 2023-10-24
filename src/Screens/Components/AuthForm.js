import { StyleSheet, View } from 'react-native'
import React, {  useState } from 'react'
import Spacer from '../Spacer/spacer';
import { Input } from '@rneui/base';

import { Button, Text } from '@rneui/themed';

const AuthForm = ({HeaderText , errorMessage , onSubmit , submitButtonText, navigation}) => {

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
 
  return (
    <View>
      <Spacer>
      <Text h3>{HeaderText}</Text>
      </Spacer>
      <Spacer>
      <Input 
      label="Email"
      value={email}
      onChangeText={newEmail => setEmail(newEmail)}
      />
      </Spacer>
      <Spacer>
      <Input label="Password"
      value={password}
      onChangeText={newpassword => setPassword(newpassword)}
      secureTextEntry
      />
      </Spacer>
  {errorMessage ?<Text style={styles.errorMessage}>{errorMessage}</Text> :null}
      <Spacer>
      <Button title={submitButtonText} onPress={()=>{onSubmit({email,password})}}/>
      </Spacer>

    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({

  errorMessage:{
    fontSize:16,
    color:'red'
  }
})