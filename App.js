import React from 'react';
import { View, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';


export default function App() {
  
  return (  
		<WelcomeScreen/> //automatically imported on the top
  );
}