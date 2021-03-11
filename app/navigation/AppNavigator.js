/**
 * Module to add the bottom navigation tabs 
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} 
        options={{
            tabBarIcon:({ color, size }) =>  // taking the props from the obj, native will know this info
                <MaterialCommunityIcons name="home" color={color} size={size} /> 
                 }} 
    />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} 
        options={{
          // for having the big round center botton:
          tabBarButton: () => <NewListingButton  />,
          tabBarIcon:({ color, size }) =>
              <MaterialCommunityIcons name="plus-circle" color={color} size={size} /> 
                }} 
    />
    <Tab.Screen name="Account" component={AccountNavigator} 
          options={{
            tabBarIcon:({ color, size }) =>
                <MaterialCommunityIcons name="account" color={color} size={size} /> 
                  }} 
    />
  </Tab.Navigator>
);

export default AppNavigator;