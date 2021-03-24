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
return (
	<Screen>
	<Button title="Tap me" onPress={showNotification} />
	</Screen>
)
}