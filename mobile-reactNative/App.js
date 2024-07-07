import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ApartmentDetailsScreen from './screens/ApartmentDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Apartments' }}
        />
        <Stack.Screen
          name="ApartmentDetails"
          component={ApartmentDetailsScreen}
          options={{ title: 'Apartment Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
