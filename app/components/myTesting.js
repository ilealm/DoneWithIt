import React from 'react';
import { Button, View, Image, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen from './app/components/Screen';

const Tweets = ({ navigation }) => (
	<Screen>
		<Text> Tweets </Text>
    {/* <Link /> */}
    <Button
      title="View Tweet" 
      onPress={ () => navigation.navigate("TweetDetails", {id: 1} )} /> 
      {/* onPress={ () => navigation.push("Tweets")} /> */}

	</Screen>
)

const Account = () => (
  <Screen><Text>Account</Text> </Screen>
)


const Tab = createBottomTabNavigator();
// tab has 2 properties: Navigator and Screen
const TabNavigator = () => (
  <Tab.Navigator>
    {/* each screen represents a tab in the app */}
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() { 
return ( 
	// I need to grap my stack in a main container
	<NavigationContainer>
    <TabNavigator />
	</NavigationContainer>
);
}