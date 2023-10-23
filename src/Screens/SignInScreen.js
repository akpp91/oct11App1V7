import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Button, Text } from '@rneui/themed';
import { Input } from '@rneui/base';


const SignInScreen = () => {
  return (
    <View>
      <Text h3>SignInScreen</Text>
      <Input label="Email"/>
      <Input label="Password"/>
      <Button title="Sign Up"/>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})