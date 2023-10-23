import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTabs from './tab';'./tab.js'
import MyStack from './StackSinSUp';
const Stack = createNativeStackNavigator();

export default function StackLFlowMFlow() {
  return (
    <Stack.Navigator
      initialRouteName="MyStack"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="MyStack"
        component={MyStack}
        options={{
          title: 'MyStack',
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