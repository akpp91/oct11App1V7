import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../SignUpScreen';
import SignInScreen from '../SignInScreen';
import MyTabs from './tab';
import ResolveAuthScreen from '../ResolveAuthScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="ResolveAuthScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      
        }

    }
    >
      <Stack.Screen
        name="ResolveAuthScreen"
        component={ResolveAuthScreen}
        options={{
          title: 'ResolveAuthScreen',
          headerShown: false         
        }
                
        }
      />

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
          headerShown: false         
        }}
      />
    </Stack.Navigator>
  );
}