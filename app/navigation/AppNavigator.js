/**
 * Module to add the bottom navigation tabs 
 */
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// I need this two for handling the notification token
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import AccountNavigator from './AccountNavigator';
import expoPushTokensApi from '../api/expoPushTokens';
import FeedNavigator from './FeedNavigator';
import ListingEditScreen from '../screens/ListingEditScreen';
import NewListingButton from './NewListingButton';
import routes from "./routes";
import navigation from './rootNavigation';
 

const Tab = createBottomTabNavigator();

// NOTE: Here I cant have access to { navigation } BC is only accesible to screen components! 
// here AppNavigator is a root navigator. Using a refHook (in App) I can access to it
const AppNavigator = () => {
  // if I want to useNavigation I will get an error
  useEffect(() => {
    registerForPushNotifications();
    // listener for notifications
    // I can see the log in metro bundler. I need to tap the notification to see it
    // Notifications.addListener(notification => console.log(notification));
    Notifications.addListener(notification => {
      // take the user to a different screen now that the user has touched the notification
      navigation.navigate('Account');
    });

  }, []); //call it only once

  const registerForPushNotifications = async () => {
    try {
      // I will use permissions module to get the user's permissions
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // NOTE: in a simulator, this property ALWAYS RETURNS false, even if the user gave permissions
      if (!permission.granted) return;
  
      // get the push notification token
      const token = await Notifications.getExpoPushTokenAsync();
      // console.log(token)
      // send the token to the server. I don't need to await the call BC I don't have something to do after.
      expoPushTokensApi.register(token);
    }
    catch (error){
      console.log('Error getting a push token', error);
    }

  }
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