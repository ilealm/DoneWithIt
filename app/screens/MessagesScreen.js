import React, { useState } from 'react';
import { FlatList, StyleSheet, View, } from 'react-native';


import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages= [
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
  // VARIABLES MUST BE DECLARED HERE, AT THE BEGGINING
  // this fun. receives a message
  // will delete a message from the messages array
  // call the server to delete the message from the backend. TB implemented
  // useState returns an array, the [0] is the state variable and [1] is the fun to upd the variable.
  // by convention is called set<Variable>
  // const array = useState(0); // 0 is the initial value
  // const count = array[0];
  // const setCount = array[1];
  // I can desctruct the last 3 lines:
  const [messages, setMessages] = useState(initialMessages);  //useState returns an array [0= variable, 1=upd fun value]
  // var to implement pull to refresh
  const [refreshing, setRefreshing] = useState(false); // BC this returns an array, I use const []

  const handleDelete = message => { 
    // to delete a single element, I can use the filter method.
    // I want all the messages EXCEPT the selected message
    // const newMessages = messages.filter( m => m.id !== message.id );  // this returns a new array
    // setMessages(newMessages); // this update the state and call a re-render

    // to put the past lines in one:
    setMessages(messages.filter( m => m.id !== message.id ));
  }


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
            // renderRightActions={ ListItemDeleteAction } // with this syntax I can't pass the prop onPress, so I need to change to a function
            renderRightActions={ () => 
              <ListItemDeleteAction onPress= { () => handleDelete(item)} 
            /> } // with this syntax I can't pass the prop onPress, so I need to change to a function
          />} // fun. to render each item
          // now, I want to add some space between items. I do it here so I don't have a last space floating
          // the ItemSeparatorComponent DOES NOT ADD THE last one
          // note the "I" is capitalized, so I need to pass a component
          ItemSeparatorComponent= {ListItemSeparator}
          refreshing = {refreshing} //bool var
          onRefresh = {() => 
            setMessages( [
              {
                id: 2,
                title: 'T2',
                description:"Refresed",
                image: require('../assets/dow.jpg')  // use requere to load an image statically
              }
            ]
            )}
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