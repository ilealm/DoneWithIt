import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';

const messages = [
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
  );
}

export default MessagesScreen;