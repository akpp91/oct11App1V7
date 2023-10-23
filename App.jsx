import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';

import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './src/Screens/AccountScreen';
import TrackCreateScreen from './src/Screens/TrackCreateScreen';
import TrackDetailScreen from './src/Screens/TrackDetailScreen';
import TrackListScreen from './src/Screens/TrackListScreen';


const stack = createNativeStackNavigator();

function App() {
  

  return (
    <NavigationContainer>

<stack.Navigator >
<stack.Screen name='SignUpScreen'
component={SignUpScreen}
options={{
title:"SignUpScreen Page"
}}/>

<stack.Screen name='SignInScreen'
component={SignInScreen}
options={{
title:"SignInScreen page"
}}/>


</stack.Navigator>
</NavigationContainer>

  );
}



export default App;
