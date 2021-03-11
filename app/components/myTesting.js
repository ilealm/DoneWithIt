import React from 'react';
import { Button, View, Image, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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

const TweetDetails = ({ route }) => (
	<Screen>
		<Text>Tweet details {route.params.id} </Text>
	</Screen>
)
 
// I put "Stack" with upper case BC it contains navigator screens: Stack.Navigator and Stack.Screen. 
const Stack = createStackNavigator();
const StackNavigator = () => (
	<Stack.Navigator 
  // these screenOptions are the same of Stack.Screen.options, but GLOBALLY to all screens in the app  
    screenOptions={{
      headerStyle:{ backgroundColor:'dodgerblue' },
      headerTintColor:'white',
    }}
  >
		{/* components to define our routes 
    only the ones usign Stack.Screen are able to acess prop navigation, UNLESS I use a hook
    */}
		<Stack.Screen 
      // header options. If I apply here, only here works. I could apply them to the navigator
      // this overrides Stack.Navigator.screenOpions
      options={{
        headerStyle:{ backgroundColor:'tomato' },
        headerTintColor:'white',
        headerShown: true,
       }}
      name="Tweets" component={Tweets} />
		<Stack.Screen       
      // options={{title: "Tweet Detail"}} // I can set to an obj, or a func that returns an obj
      // If I want the properties dynamically,  I can set to an obj, or a func that returns an obj.
      // IMPORTANT  I need to wrap the object in (), if don't, it won't work
      // options={ ({ route }) => ({title: route.params.id }) } 

      name="TweetDetails" component={TweetDetails} />
	</Stack.Navigator>
)


const Account = () => (
	<Screen>
		<Text>Account </Text>
	</Screen>
)


const Tab = createBottomTabNavigator();
// tab has 2 properties: Navigator and Screen
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor:'tomato',
      activeTintColor:'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor:'blue'
    }}
  >
    {/* each screen represents a tab in the app */}
    <Tab.Screen 
      options={{ 
        // if I destruct size, is the size that react recommend
        // react will tell the color from whatever I said in tabBarOptions 
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons 
                            name='home' size={size} color={color} /> }}
      name="Feed" component={StackNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

export default function App() { 
return ( 
	// I need to grap my stack in a main container
	<NavigationContainer>
		{/* <StackNavigator /> */}
    <TabNavigator />
	</NavigationContainer>
);
}