import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackListScreen from '../TrackListScreen';
import TrackDetailScreen from '../TrackDetailScreen';

const Stack = createNativeStackNavigator();

export default function TrackListFlow() {
  return (
    <Stack.Navigator
      initialRouteName="TrackListScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="TrackListScreen"
        component={TrackListScreen}
        options={{
            headerShown: false, // Hide the header for this screen
          }}
      />

      <Stack.Screen
        name="TrackDetailScreen"
        component={TrackDetailScreen}
        options={{
            headerShown: false, // Hide the header for this screen
          }}
      />
    </Stack.Navigator>
  );
}