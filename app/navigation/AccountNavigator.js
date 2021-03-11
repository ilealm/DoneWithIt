import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';


const Stack = createStackNavigator();

const AccountNavigator = () => (
  // modal mode displays the next window from the bottom and pull down to close it. card show if comming from the right
  <Stack.Navigator>    
    <Stack.Screen  name="Account" component={AccountScreen}  />
    <Stack.Screen  name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;