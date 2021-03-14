import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
// import { ActivityIndicator} from 'react-native';  

import ActivityIndicator from "../components/ActivityIndicator";
import Card from '../components/Card';
import colors from '../config/colors';
import Button from '../components/Button';
import listingsApi from "../api/listings";
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import AppText from '../components/Text';

// const listings = [
//   {
//     id: 1,
//     title:"Red jacket for sale",
//     price: 100,
//     image: require('../assets/jacket.jpg'),
//   },
//   {
//     id: 2,
//     title:"Couch in grat condition",
//     price: 1000,
//     image: require('../assets/couch.jpg'),
//   },
// ]

function ListingScreens({ navigation }) {
  // var to store the listings I get from the server
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  // fill the api the first time the component is render, using useEffect
  useEffect(() => {
    loadListings();
  } , []); // execute only once, when is rendered
  
  // I need to call a separate fun. BC I CAN HAVE PROMISES IN hooks!!
  const loadListings = async () => {
    setLoading(true);
    // this promise will be always resolve (apisouce), even it I get an error. I don't need try catch
    const response = await listingsApi.getListings(); 
    setLoading(false);

    if (!response.ok) return setError(true);
      
    setError(false);
    setListings(response.data);
  }

  return (
    <Screen style={styles.screen}>
      {/* Error handling */}
      {error && <>
        <AppText>Couldn't retrive the listings.</AppText>
        <Button title="Retry" onPress={loadListings} />
      </>}

      {/* I'm replacing this with lottie animation */}
      {/* <ActivityIndicator animating={loading} size="large" /> */}
      <ActivityIndicator visible={loading} />
        
  
      {/* I will use a flatlist to display a bunch of cards */}
      <FlatList
        // data expects an array of objects.
        data={ listings }
        keyExtractor={ listing => listing.id.toString() }
        renderItem = {({item}) => 
          <Card 
            title = {item.title}
            subTitle= {"$" + item.price}
            // image = {item.image}  // this works for the static array I used at the begginig
            imageUrl = {item.images[0].url}  // the data from API is slightly different, so I need to change this 
            // onPress={() => navigation.navigate("ListingDetails", item)}   />   
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}   />   
          }
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