import React, {useState, useEffect} from 'react';
import { Button, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import AccountScreen from './app/screens/AccountScreen';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ImageInput from './app/components/ImageImput';
import ImageInputList from './app/components/ImageInputList';
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
  const [imageUris, setImageUris] = useState([]);

  // function that add a new uri to the array of imagesUris
  const handleAdd = uri => {
    // ...imageUris takes a copy of the original array
    setImageUris([...imageUris, uri]);
  }
  

  const handleRemove = uri => {
    setImageUris(imageUris.filter(
      imageUri => imageUri !== uri ));
  }

  return (  
    <Screen>
      <ImageInputList           
        imageUris={ imageUris } 
        // onAddImage={ uri => handleAdd(uri)} // BC both arguments are =, I can simply this to the next line:
        onAddImage={ handleAdd }
        onRemoveImage={handleRemove}
        />


    </Screen>   
);
}