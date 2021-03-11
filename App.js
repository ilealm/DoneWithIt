import React from 'react';
import { Button, View, Image, Text } from 'react-native';
// this is defined in the stack library
import { createStackNavigator } from '@react-navigation/stack'
// this is defined in the main navigation library
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      name="Feed" component={Tweets} />
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