import React from 'react';
import { FlatList, StyleSheet, } from 'react-native';
// expo-constants gives a lot of info about the current platform.
import Constants from 'expo-constants';  //this don't need to be wrapped in {} 


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

const messages= [
  {
    id: 1,
    title: 'T1',
    description:"D1",
    image: require('../assets/dow.jpg')  // use requere to load an image statically
  },
  {
    id: 2,
    title: 'T2',
    description:"D2",
    image: require('../assets/dow.jpg')  // use requere to load an image statically
  }
]

function MessagesScreen(props) {
  return(
    // <Screen styles={styles.screen}> 
    <Screen> 
      <FlatList 
        data = {messages} // is an array
        // keyExtractor={ message => messages.id.toString()}  // pass a func. to extract tje unique key of the array. I need to use toString
        keyExtractor={ message => messages.id}  // toString is causing errors
        renderItem= {({item}) => // is the arg destructured
          <ListItem 
            title={ item.title }
            subTitle = {item.description}
            image = {item.image}
          />} // fun. to render each item
      />
    </Screen>
  );
}


const styles = StyleSheet.create({
  screen:{
  }
})

export default MessagesScreen;