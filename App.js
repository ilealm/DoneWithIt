import React from 'react';
import { View, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';

export default function App() {  
  return (  
    
      <Screen>
            <Icon 
                  name='email'
                  // size={100}
                  // backgroundColor= 'red'
                  // iconColor='white' 
                   />
      </Screen>
      
      //   <MessagesScreen />
      // <ViewImageScreen />
   // <ListingDetailsScreen />
    
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