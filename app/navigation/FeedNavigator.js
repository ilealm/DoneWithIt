import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingScreens from '../screens/ListingScreens';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  // modal mode displays the next window from the bottom and pull down to close it. card show if comming from the right
  <Stack.Navigator mode="modal" screenOptions={{headerShown:false }} >    
    <Stack.Screen  name="Listings" component={ListingScreens}  />
    <Stack.Screen  name="ListingDetails" component={ListingDetailsScreen}  />
    {/* <Stack.Screen  name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown:false }} /> */}
  </Stack.Navigator>
);

export default FeedNavigator;