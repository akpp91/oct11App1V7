import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../SignUpScreen';
import SignInScreen from '../SignInScreen';
import MyTabs from './tab';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignUpScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      
        }

    }
    >
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: 'SignUpScreen',
          headerShown: false         
        }
                
        }
      />

      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: 'SignInScreen',
          headerShown: false         
          
        }}
      />
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          title: 'MyTabs',
        }}
      />
    </Stack.Navigator>
  );
}