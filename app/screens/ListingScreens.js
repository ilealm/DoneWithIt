import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors'
import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title:"Red jacket for sale",
    price: 100,
    image: require('../assets/jacket.jpg'),
  },
  {
    id: 2,
    title:"Couch in grat condition",
    price: 1000,
    image: require('../assets/couch.jpg'),
  },
]

function ListingScreens(props) {
  return (
    <Screen style={styles.screen}>
      {/* I will use a flatlist to display a bunch of cards */}
      <FlatList
        // data expects an array of objects.
        data={ listings }
        keyExtractor={ listing => listing.id.toString() }
        renderItem = {({item}) => 
          <Card 
            title = {item.title}
            subTitle= {"$" + item.price}
            image = {item.image}  />   }
      />

    </Screen>
  );
}

const styles = StyleSheet.create({
  screen:{
    // the padding for the screen for some reason does not apply, to I need to go to Screens
    // the padding don't apply horz padding (react thing) (left and right)
    // so I need to add a View and then add the padding to the view
    padding: 20,  
    backgroundColor: colors.light,
  }
})


export default ListingScreens;