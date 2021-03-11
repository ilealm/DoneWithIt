import React from 'react';

import { View, StyleSheet, Image } from 'react-native'


import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import Text from '../components/Text';

function ListingDetailsScreen({ route }) {
  // in order to get the right item, I need to get the params
  const listing = route.params;

  return (
    // version with hard code options
    // <View>
    //   <Image  style={styles.image} source={require('../assets/jacket.jpg')} />
    //   <View style={styles.detailsContainer}>
    //     <Text style={styles.title}>Red jacket for sale </Text>
    //     {/* here I'm saying price and not subTitle BC this page is not intended to reuse */}
    //     <Text style={styles.price}>$100 </Text>        
    //   </View>
    //   <View style={styles.userContainer}>
    //     {/* This component display the seller image, name and listings */}
    //     <ListItem
    //       image={require("../assets/dow.jpg")}
    //       title="Josh Dow"
    //       subTitle= "5 Listings" 
    //     />
    //   </View>
    // </View>
    // NOW that I have this component inside the navigation, I can access route.
    <View>
      <Image  style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title} </Text>
        {/* here I'm saying price and not subTitle BC this page is not intended to reuse */}
        <Text style={styles.price}>{listing.price} </Text>        
      </View>
      <View style={styles.userContainer}>
        {/* This component display the seller image, name and listings */}
        <ListItem
          image={require("../assets/dow.jpg")}
          title="Josh Dow"
          subTitle= "5 Listings" 
        />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  detailsContainer:{
    padding: 20,
  },
  image:{
    width: "100%",
    height: 300,
  },
  price:{
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20, 
    marginVertical: 10, 
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer:{
    marginLeft: 20, // I added this
    marginVertical: 40,
  },
})

export default ListingDetailsScreen;