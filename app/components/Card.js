import React from 'react';
import { View, 
  StyleSheet, 
  Image, 
  TouchableWithoutFeedback } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Text from './Text';
import colors from '../config/colors';

// usually this component is called from ListingScreen

// I need to destructure this props to get the image. remember it has to have {}
// function Card(props) {
function Card({title, subTitle, imageUrl, onPress  }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {/* this container is the main, where each card is displayed. */}
      <View style={styles.card}>
        {/* <Image style={styles.image} source={image}></Image> */}
        {/* now image is an object, so I need to add {} */}
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={3}> {title} </Text>
          <Text style={styles.subTitle} > {subTitle} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card:{
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow:'hidden', //this will round the image BC the image is showing overflow.
  },
  detailsContainer:{
    padding: 20,
  },
  image:{
    width: "100%",
    height: 200,
  },
  subTitle:{
    color: colors.secondary,
    fontWeight: "bold",
  },
  // Text doesn't support style, so to work the one I declare here I need to go yo textApp
  // and manipulate the styles param there 
  title:{
    marginBottom: 7,
  },
})

export default Card;