import React from 'react';
import { Button, View, Image, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer, useNavigation } from "@react-navigation/native";

// import AccountScreen from './app/screens/AccountScreen';
// import Card from './app/components/Card';
// import Icon from './app/components/Icon';
// import ImageInput from './app/components/ImageImput';
// import ImageInputList from './app/components/ImageInputList';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
// import ListItem from './app/components/lists/ListItem';
// import ListingEditScreen from './app/screens/ListingEditScreen';
// import ListingScreens from './app/screens/ListingScreens';
// import LoginScreen from './app/screens/LoginScreen';
// import MessagesScreen from './app/screens/MessagesScreen';
// import Picker from './app/components/Picker';
// import RegisterScreen from './app/screens/RegisterScreen';
import Screen from './app/components/Screen';
// import TextInput from './app/components/TextInput';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';



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