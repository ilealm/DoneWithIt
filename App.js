import React, {useState, useEffect} from 'react';
import { View, } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import AccountScreen from './app/screens/AccountScreen';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListItem from './app/components/lists/ListItem';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingScreens from './app/screens/ListingScreens';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Picker from './app/components/Picker';
import RegisterScreen from './app/screens/RegisterScreen';
import Screen from './app/components/Screen';
import TextInput from './app/components/TextInput';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {  
  const requestPermission = async () => {
    // the answer will be remembed in the divice
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted)
      alert('You need to enable permission to access the library.')
    else
      alert('jere')
  }

  // if I mark this fun as async, implicity returns a promise, and useEffect CANT RETURN A PROMISE
  useEffect(() => {
    // BUT I can call a function to take care of the promise.
    requestPermission();
  }, [])

  return (  
      <Screen></Screen>   
);
}