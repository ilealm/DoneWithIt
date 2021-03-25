import React, { useState } from 'react';
import { Button, View, Image, Text } from 'react-native';
import { AsyncStorage } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NetInfo,  { useNetInfo } from '@react-native-community/netinfo';
import AppLoading from 'expo-app-loading';
import { Notifications } from 'expo' 


import logger from './app/utility/logger';
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
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
// import TextInput from './app/components/TextInput';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';
import Screen from './app/components/Screen';
import { navigationRef } from './app/navigation/rootNavigation';
import LocalNotifications from './app/screens/LocalNotifications';



// start the logger
logger.start();

export default function App() { 
  // test the error logger
  // logger.log(new Error("Error in app"));

    const [user, setUser] = useState();
    // state to know is the app is ready and I don't show splash windows
    const [isReady, setIsReady] = useState(false);

    const restoreUser = async () => {      
      const user = await authStorage.getUser();
      if (user) setUser(user);
    };

 
    if (!isReady){
      return (
        <AppLoading 
            startAsync={restoreUser} 
            onFinish={() => setIsReady(true)} 
            onError={console.warn}  // I NEED to have onError, otherwise will generate error
        />
    );}

 

  return (
    // all the values I pass will be accesable to all the components inside the provider.
    // BS I want to pass the user and the fun to update it, I need to pass an object with 2 props
    // <AuthContext.Provider value={user}> 
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>

      
  );
}