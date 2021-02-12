import React from 'react';
import { View, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

export default function App() {  
  return (  
    
    <ListingDetailsScreen />
    
///////////////////////
      // <WelcomeScreen/> 
///////////////////////
      // <View style={{
      //   backgroundColor:'#f8f4f4',
      //   padding: 20,
      //   paddingTop: 100,
        
      // }}>
      //   <Card 
      //     title= "Red jacket for sale"
      //     subTitle="$100"
      //     image = {require("./app/assets/jacket.jpg")}
      //     // image={require("./app/assets/jacket.jpg")}
      //   />
      // </View>

  );
}