import React from 'react';
import { Button, View, Image, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer } from "@react-navigation/native";

const Tweets = () => (
  <Screen>
    <Text> Tweets </Text>
  </Screen>
)

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details </Text>
  </Screen>
) 

// I put "Stack" with upper case BC it contains navigator screens:  Stack.Navigator and Stack.Screen. 
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    {/* components to define our routes */}
    <Stack.Screen name="TweetsDetails" component={TweetDetails} />
    <Stack.Screen name="Tweets" component={Tweets} />
  </Stack.Navigator>
)


export default function App() {  
  return (  
    // I need to grap my stack in a main container
   <NavigationContainer>
     <StackNavigator />
   </NavigationContainer>
);
}