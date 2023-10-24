import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Screens/navigationStacks/StackSinSUp';
import { Provider as AuthProvider } from './src/Screens/context/AuthContext';



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
      <AuthProvider>
         <MyStack />
      </AuthProvider>
    </NavigationContainer>
  
    );
};