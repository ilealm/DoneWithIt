import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  
  return (
		<WelcomeScreen/> //automatically imported on the top
  );
}