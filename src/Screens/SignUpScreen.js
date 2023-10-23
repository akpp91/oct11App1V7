import { StyleSheet,View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Input, Text } from '@rneui/themed'
import Spacer from './Spacer/spacer'
import { Context as AuthContext } from './context/AuthContext'


const SignUpScreen = ({navigation}) => {
  const {state , signup }=useContext(AuthContext);
   const [email, setEmail]=useState('');
   const [password, setPassword]=useState('');

   
  return (
    <View style={styles.container}>
      <Spacer>
      <Text h3>SignUpScreen for tracker</Text>
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
  {state.errorMessage ?<Text style={styles.errorMessage}>{state.errorMessage}</Text> :null}
      <Spacer>
      <Button title="Sign Up" onPress={()=>{signup({email,password})}}/>
      </Spacer>
      
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container:{
    
    flex:1,
    justifyContent:'center',
    marginBottom:250
  },
  errorMessage:{
    fontSize:16,
    color:'red'
  }

})