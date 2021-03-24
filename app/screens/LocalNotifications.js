import React from 'react'
import { Button } from 'react-native'
import { Notifications } from 'expo' 
import Screen from '../components/Screen'

export default function LocalNotifications() {
	const showNotification = () => {
    Notifications.presentLocalNotificationAsync({
      title:'Congratulations',
      body:'Your order was succesfully placed!',
  	})
	};

	const scheduleNotification = () => {
    Notifications.scheduleLocalNotificationAsync({
      title:'Scheduled',
      body:'Your order was succesfully scheduled!',
  	}, {
      // scheduling object. In this example, 2 seconds in the future
      time: new Date().getTime() + 2000,
    }  )
	};


return (
	<Screen>
	<Button title="Tap me" onPress={showNotification} />
	<Button title="Schedule Notification" onPress={scheduleNotification} />
	</Screen>
)
}