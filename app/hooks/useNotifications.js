import { useEffect } from 'react';
// I need this two for handling the notification token
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


import expoPushTokensApi from '../api/expoPushTokens';

import navigation from '../navigation/rootNavigation';


export default useNotifications = (notificationListener) => {
  // if I want to useNavigation I will get an error
  useEffect(() => {
    registerForPushNotifications();
    // listener for notifications
    // I can see the log in metro bundler. I need to tap the notification to see it
    // Notifications.addListener(notification => console.log(notification));
    Notifications.addListener(notification => {
      // take the user to a different screen now that the user has touched the notification
      navigation.navigate('Account');
    });

    // THIS IS NOT WORKING. FOR NOW I WILL LET HARDCODED IN LINE 19
    // instead of hardcoding the function to navigate, I will accept an argument
    // if (notificationListener)
    //   Notifications.addListener(notificationListener);
  }, []); //call it only once

  const registerForPushNotifications = async () => {
    try {
      // I will use permissions module to get the user's permissions
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // NOTE: in a simulator, this property ALWAYS RETURNS false, even if the user gave permissions
      if (!permission.granted) return;

      // get the push notification token
      const token = await Notifications.getExpoPushTokenAsync();
      // console.log(token)
      // send the token to the server. I don't need to await the call BC I don't have something to do after.
      expoPushTokensApi.register(token);
    }
    catch (error){
      console.log('Error getting a push token', error);
    }
  }
};
