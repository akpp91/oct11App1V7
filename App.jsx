import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Screens/navigationStacks/StackSinSUp';
import { Provider as AuthProvider } from './src/Screens/context/AuthContext';
import {Provider as LocationProvider} from './src/Screens/context/LocationContext';
import { Provider as TrackProvider} from './src/Screens/context/TrackContext';



// const switchNavigator = createNativeStackNavigator({
//   loginFlow: createNativeStackNavigator({
//     Signup: SignUpScreen,
//     SignIn: SignInScreen,
//   }),
//   mainFlow: createMaterialBottomTabNavigator({
//     TrackListFlow: createNativeStackNavigator({
//       TrackList: TrackListScreen,
//       TrackDetail: TrackDetailScreen,
//     }),
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen,
//   }),
// });


export default function App() {
  return (
    <NavigationContainer>
      <TrackProvider>
      <LocationProvider>
      <AuthProvider>
         <MyStack />
      </AuthProvider>
      </LocationProvider>
      </TrackProvider>
    </NavigationContainer>
  
    );
};