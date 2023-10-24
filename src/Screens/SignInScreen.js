import { StyleSheet, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AuthForm from './Components/AuthForm';
import NavLink from './Components/NavLink';
import { Context } from './context/AuthContext';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = ({ navigation }) => {

  const { state, signin, clearErrorMessage } = useContext(Context)


  const navigation1 = useNavigation();


  React.useEffect(() => {
    const unSubsribeBlur = navigation1.addListener('focus', () => {
      console.log("Blur event triggered");
      clearErrorMessage();
      console.log("clear");
    });

    return unSubsribeBlur;
  }, [navigation1]);


  return (
    <View style={styles.container}>
      <AuthForm
        HeaderText="Sign In to your Yount"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={({ email, password }) => signin({ email, password }, () => navigation.navigate('MyTabs'))}

      />
      <NavLink
        text="Dont have an Account? Sign up Insted"
        routeName="SignUpScreen"
      />
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})