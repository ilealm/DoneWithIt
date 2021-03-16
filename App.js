import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetInfo,  { useNetInfo } from '@react-native-community/netinfo';

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
import AppNavigator from './app/navigation/AppNavigator';
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace';
// import TextInput from './app/components/TextInput';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';




export default function App() { 
  // get info of the conection, using the method fetch which returns a promise. I can use await or .then
  // NetInfo.fetch().then(netInfo => {console.log(netInfo)})
  // addEventListener: subscribe to network status changes. Pass a func. that will be called everytime the network status changes
  // The first time it returns 2 objs, and 1rst says isInternetReachable=null, then the other times says isInternetReachable=true
  // const unsubscribe =  NetInfo.addEventListener(netInfo => console.log(netInfo))
  // // don't forget to unsubscribe BC if not I will have memory leak 
  // unsubscribe();
  // but I can have all this manage using useNetInfo hook, which handles the subcribe and unsubscribe
  // const netInfo = useNetInfo();
  // const demo = async () => {
  //   try{
  //     await AsyncStorage.setItem('person', JSON.stringify({id:1}));
  //     // to read
  //     const value = await AsyncStorage.getItem('person');
  //     const person = JSON.parse(value);
  //     console.log(person);
  //   } 
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // demo();

  return ( 
    <NavigationContainer theme={navigationTheme}>
      {/* Depending on user auth, is what I will display */}
      {/* <AuthNavigator /> */}
      <AppNavigator />
    </NavigationContainer>   
  );
}