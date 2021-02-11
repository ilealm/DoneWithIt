import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
// this library is installed auto when I install expo
import { MaterialIcons } from '@expo/vector-icons';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';



export default function App() {
  
  return (
		// <WelcomeScreen/> //automatically imported on the top
    // <ViewImageScreen/>
    <View
      style={{
        flex:1,   // this center the objs on the next view
        justifyContent: "center",
        alignItems:"center", 
      }} >
        <AppText>I love React Native</AppText>
    </View>
  );
}