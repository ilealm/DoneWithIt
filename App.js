import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

import Welcome from './screens/Welcome';


export default function App() {
  
  return (
    // <View
    //   style={ {
    //     backgroundColor:"#fff",
    //     flex: 1,
    //     flexDirection:"row",
    //     // justifyContent:"center", // main
    //     // alignItems:"center", // secondary        
    //   } }
    // >      
    
    <View>
      <Welcome/>
    </View>

    // </View>
  );
}


