import { StyleSheet,TouchableOpacity,View } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Input, Text } from '@rneui/themed'
import Spacer from './Spacer/spacer'
import { Context as AuthContext } from './context/AuthContext'
import AuthForm from './Components/AuthForm'


const SignUpScreen = ({navigation}) => {
  const {state , signup }=useContext(AuthContext);

  
  const nav=()=>navigation.navigate('MyTabs');
  return (
    <View style={styles.container}>
      <AuthForm 
      HeaderText="Sign Up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign UP"
      onSubmit={({email, password}) => signup({ email , password} , nav)}
      />
    <TouchableOpacity onPress={()=>{navigation.navigate('SignInScreen')}}>
    <Spacer>
    <Text style={styles.link}>Already have an Account? Sign In insted</Text>
    </Spacer>
    </TouchableOpacity>    

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
  link:
  {
    color:'blue'
  }

})