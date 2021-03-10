import React from 'react';
import { Button, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer, useNavigation } from "@react-navigation/native";


import Screen from './app/components/Screen';

// this component is a child of Tweets, and can't access prop navigation, 
// UNLESS I use the hook useNavigation which gives me access to prop navigation
const Link = () => {
  const navigation = useNavigation();  // gives me access to prop navigation
  
  return (
    <Button
      title="Click"
      onPress={( ) => navigation.navigate('TweetDetails')}  />
  )}


const Tweets = ({ navigation }) => (
	<Screen>
		<Text> Tweets </Text>
    <Link />
    {/* <Button
      title="View Tweet" 
      // onPress={ () => navigation.navigate("TweetDetails")} />
      onPress={ () => navigation.push("Tweets")} /> */}

	</Screen>
)

const TweetDetails = () => (
	<Screen>
		<Text>Tweet details </Text>
	</Screen>
)
 
// I put "Stack" with upper case BC it contains navigator screens: Stack.Navigator and Stack.Screen. 
const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator initialRouteName="Tweets">
		{/* components to define our routes 
    only the ones usign Stack.Screen are able to acess prop navigation, UNLESS I use a hook
    */}
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen name="TweetDetails" component={TweetDetails} />
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