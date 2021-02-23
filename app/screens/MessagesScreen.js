import React from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';
// expo-constants gives a lot of info about the current platform.
import Constants from 'expo-constants';  //this don't need to be wrapped in {} 




import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

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
            onPress={() => console.log('Message selected. ToDo send to another screen')}
            renderRightActions={ ListItemDeleteAction }
          />} // fun. to render each item
          // now, I want to add some space between items. I do it here so I don't have a last space floating
          // the ItemSeparatorComponent DOES NOT ADD THE last one
          // note the "I" is capitalized, so I need to pass a component
          ItemSeparatorComponent= {ListItemSeparator}
        // ItemSeparatorComponent= {() => 
        //   <View style={{width:'100%', height:1, backgroundColor:'#000'}} />                        
        // }
      />
    </Screen>
  );
}


const styles = StyleSheet.create({
  screen:{
  }
})

export default MessagesScreen;