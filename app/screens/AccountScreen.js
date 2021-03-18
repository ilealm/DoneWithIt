import React from 'react';
// BE SURE TO IMPORT FlatList from react-Native, not gesture.
// import { FlatList } from 'react-native-gesture-handler';
import { View, StyleSheet, FlatList } from 'react-native'

import { ListItem, ListItemSeparator } from "../components/lists";
import Icon from '../components/Icon';
import colors from '../config/colors';
import routes from "../navigation/routes";
import Screen from '../components/Screen';
import useAuth from '../auth/useAuth';
// import authStorage from '../auth/storage';
// import AuthContext from '../auth/context';



const menuItems = [
  { title : 'My Listings',
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    // TODO: Add a real target for this module
    targetScreen: routes.MESSAGES,
  },
  { title : 'My Messages',
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    // targetScreen: "Messages",
    targetScreen: routes.MESSAGES,
  },
]

function AccountScreen({ navigation }) {
  // const authContext = useContext(AuthContext);
  // const {user, setUser} = useContext(AuthContext);
  // const {user, setUser } = useAuth();
  const { user, logOut } = useAuth(); //now I don't need the setUSer, BC is handled by the useAuth hook
  // console.log(user)
  
  // I will encapsulate this in the useAuth hook, so now I don't need this function, I can just call it 
      // const handleLogOut = () => {
      // clear the user from the context
      // setUser(null);
      // // clear the stored token (renamed storage to authStorge)
      // authStorage.removeToken();
  // }

  return (
    <Screen style={styles.screen}>
      {/* Here is an image on left, a title and subtitle on right. */}
      <View style={styles.container} >
        <ListItem
          title={ user.name }
          subTitle={ user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
          />   } 
          ItemSeparatorComponent={ListItemSeparator}
          >
          </FlatList>

      </View>
      {/* Log out area */}
      <ListItem
        title="Log out"
        IconComponent={
          <Icon name="logout" backgroundColor="#ffe66d" /> }  
        onPress={() => {logOut()}}
        />
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