import React from 'react';
import { View, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';


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
        {/* <AppText>I love React Native</AppText> */}
        {/* <AppButton title="Login" onPress={() => console.log('Tapped!')} /> */}
        <AppButton title="Login" onPress={() => console.log('Tapped :-)')} />
    </View>
  );
}