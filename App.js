import React, {useState} from 'react';
import { View, Text, TextInput, Switch } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreens from './app/screens/ListingScreens';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {  
      const [isNew, setIsNew] = useState(false)
      
  return (  
      <Screen>
            <AppPicker icon="apps" placeholder="Category" />
            {/* <AppTextInput icon="email" placeholder="email" /> */}

      </Screen>
  );
}