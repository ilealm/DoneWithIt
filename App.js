import React from 'react';
import { Button, View, Image, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AccountScreen from './app/screens/AccountScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
// import Card from './app/components/Card';
// import Icon from './app/components/Icon';
// import ImageInput from './app/components/ImageImput';
// import ImageInputList from './app/components/ImageInputList';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
// import ListItem from './app/components/lists/ListItem';
// import ListingEditScreen from './app/screens/ListingEditScreen';
// import ListingScreens from './app/screens/ListingScreens';
// import LoginScreen from './app/screens/LoginScreen';
// import MessagesScreen from './app/screens/MessagesScreen';
// import Picker from './app/components/Picker';
// import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import navigationTheme from './app/navigation/navigationTheme';
// import TextInput from './app/components/TextInput';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';




export default function App() { 
  return ( 
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
   
  );
}