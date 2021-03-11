import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingScreens from '../screens/ListingScreens';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen  name="Listings" component={ListingScreens}  />
    <Stack.Screen  name="ListingDetails" component={ListingDetailsScreen}  />
  </Stack.Navigator>
);

export default FeedNavigator;