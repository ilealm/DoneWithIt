import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

// I need to destructure this props to get the image. remember it has to have {}
// function Card(props) {
function Card({title, subTitle, image}) {
  return (
    // this container is the main, where each card is displayed.
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={3}> {title} </AppText>
        <AppText style={styles.subTitle} > {subTitle} </AppText>
      </View>
    </View>
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
  // AppText doesn't support style, so to work the one I declare here I need to go yo textApp
  // and manipulate the styles param there 
  title:{
    marginBottom: 7,
  },
})

export default Card;