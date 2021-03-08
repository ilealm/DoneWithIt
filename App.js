import React, {useState, useEffect} from 'react';
import { Button, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import AccountScreen from './app/screens/AccountScreen';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ImageInput from './app/components/ImageImput';
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
  const [imageUri, setImageUri] = useState();

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
        <Image source={{ uri: imageUri }} 
          style={{ width:200, height:200 }} />
        <ImageInput imageUri={ imageUri } />
    </Screen>   
);
}