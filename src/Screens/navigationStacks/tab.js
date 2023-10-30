import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TrackCreateScreen from '../TrackCreateScreen';
import AccountScreen from '../AccountScreen';
import TrackListFlow from './TrackListFlow';



const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TrackListFlow"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="TrackListFlow"
        component={TrackListFlow}
        options={{
          tabBarLabel: 'TrackListFlow',
          tabBarIcon: ({ color }) => (
            <Icon name="format-list-bulleted" color={color} size={26} />

          ),
          

        }}
      />
        <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel: 'AccountScreen',
          tabBarIcon: ({ color }) => (
            <Icon name="account-box" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="TrackCreateScreen"
        component={TrackCreateScreen}
        options={{
          tabBarLabel: 'TrackCreateScreen',
          tabBarIcon: ({ color }) => (
            <Icon name="add-box" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}