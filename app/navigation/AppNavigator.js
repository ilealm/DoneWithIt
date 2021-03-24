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
import routes from "./routes";
import navigation from './rootNavigation';
import useNotifications from './useNotifications';
 

const Tab = createBottomTabNavigator();

// NOTE: Here I cant have access to { navigation } BC is only accesible to screen components! 
// here AppNavigator is a root navigator. Using a refHook (in App) I can access to it
const AppNavigator = () => {
  useNotifications();
  
  return (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} 
        options={{
            tabBarIcon:({ color, size }) =>  // taking the props from the obj, native will know this info
                <MaterialCommunityIcons name="home" color={color} size={size} /> 
                  }} 
    />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} 
        // this options can set to a obj, or a function that returns an object. 
        // If retturns an object, I need to wrap it in parentesis, BC if not react will take it as code and not an object  
        options={({ navigation }) => ({  
          // for having the big round center botton:
          // here I need the navigation object
          // tabBarButton: () => <NewListingButton />,
          tabBarButton: () => <NewListingButton 
            // onPress={() => navigation.navigate("ListingEdit") } 
                              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />,
          tabBarIcon:({ color, size }) =>
              ( <MaterialCommunityIcons name="plus-circle" color={color} size={size} /> ),
      })} 
    />
    <Tab.Screen name="Account" component={AccountNavigator} 
          options={{
            tabBarIcon:({ color, size }) =>
                <MaterialCommunityIcons name="account" color={color} size={size} /> 
                  }} 
    />
  </Tab.Navigator>
  );
  };
 
 export default AppNavigator;