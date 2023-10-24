import { StyleSheet,View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'


import { Context as AuthContext } from './context/AuthContext'
import AuthForm from './Components/AuthForm'
import NavLink from './Components/NavLink'
import { useNavigation } from '@react-navigation/native'


const SignUpScreen = ({navigation}) => {
  const {state , signup , clearErrorMessage ,tryLocalSignIn }=useContext(AuthContext);
  const navigation1 = useNavigation();

  
useEffect(() => {

    const unSubsribeBlur = navigation1.addListener('focus', () => {
      console.log("Blur event triggered");
      clearErrorMessage();
      tryLocalSignIn(navigation);
      console.log("clear");
    });

    return unSubsribeBlur;
  }, [navigation1]);
  
  return (
    <View style={styles.container}>
      <AuthForm 
      HeaderText="Sign Up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign UP"
      onSubmit={({email, password}) => signup({ email , password} ,()=>{navigation.navigate('MyTabs')} )}
      />
      <NavLink 
      routeName="SignInScreen"
      text="Already have an account ? Sign In insted"
      />
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