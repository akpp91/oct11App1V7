import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context as AuthContext } from './context/AuthContext'
import { Button } from '@rneui/themed'
import Spacer from './Spacer/spacer'

const AccountScreen = ({navigation}) => {
    const {signout} =useContext(AuthContext)
  return (
    <View>
      <Text>AccountScreen</Text>
      
      <Spacer>
      <Button 
      name="login"
      title='sign out'
      onPress={()=> signout(()=>{ navigation.navigate('SignInScreen')})}
      />
      </Spacer>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})