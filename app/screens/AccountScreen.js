import React from 'react';
// BE SURE TO IMPORT FlatList from react-Native, not gesture.
// import { FlatList } from 'react-native-gesture-handler';
import { View, StyleSheet, FlatList } from 'react-native'

import { ListItem, ListItemSeparator } from "../components/lists";
import Icon from '../components/Icon';
import colors from '../config/colors';
import Screen from '../components/Screen';



const menuItems = [
  { title : 'My Listings',
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    }
  },
  { title : 'My Messages',
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    }
  },
]

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      {/* Here is an image on left, a title and subtitle on right. */}
      <View style={styles.container} >
        <ListItem
          title="Iris Leal"
          subTitle="Engineer"
          image={require('../assets/dow.jpg')}  />
        </View>
      {/* here are the menu Items */}
      <View style={styles.container} >
        <FlatList
          data = {menuItems }
          // keyExtractor MUST have a unique key
          keyExtractor = {menuItem => menuItem.title}
          // renderItem expects a function with argument "{() =>}"
          // Im' desctructure the argument and pick the item property "{({item}) =>}"
          renderItem={({item}) => 
          <ListItem 
            title = {item.title}
            IconComponent = {
              <Icon 
                name={item.icon.name} 
                backgroundColor={item.icon.backgroundColor} 
                />   }
          />   } 
          ItemSeparatorComponent={ListItemSeparator}
          >
          </FlatList>

      </View>
      {/* Log out area */}
      <ListItem
        title="Log out"
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" /> }  />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen:{
    backgroundColor: colors.light, //doesn't work here, I need to change in Screen.js
  },
  container:{
    marginVertical: 20,
  },
})


export default AccountScreen;