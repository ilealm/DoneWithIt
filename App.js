import React, {useState, useEffect} from 'react';
import { Button, View, Image } from 'react-native';
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
import * as Permissions from 'expo-permissions';


export default function App() {  
  const [imageUri, setImageUri] = useState();

  // const requestPermission = async () => {
  //   // EXAMPLE USING EXPO-PERMISSIONS
  //   // import * as Permissions from 'expo-permissions';
  //   // here I can pass multiple permission types
  //   const result = await  Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION  );  // this returns an object, so I need to use await
  //   // result.granted, all the persmissions need to be granted


  //   // EXAMPLE USING EXPO-IMAGE-PICKER
  //   // import * as ImagePicker from 'expo-image-picker';
  //   // the answer will be remembed in the divice
  //   const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
  //   if (!granted)
  //     alert('You need to enable permission to access the library.')
  //   else
  //     alert('Access granted')
  // }

  // // if I mark this fun as async, implicity returns a promise, and useEffect CANT RETURN A PROMISE
  // useEffect(() => {
  //   // BUT I can call a function to take care of the promise.
  //   requestPermission();    
  // }, [])  // only execute once, on the 1st render

   
    

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled)
        setImageUri(result.uri);
    //  result.cancelled: boolean. If the user don't select anything, cancel returns true
    // result.uri: is the full path to the image
    } catch (error) {
      console.log('Error reading an image.', error);
    } 
  }

  
  return (  
    <Screen>
        <Button title="Select Image" onPress={ selectImage } />
        <Image source={{uri: imageUri}} style={{ width:200, height:200 }} />
      </Screen>   
);
}