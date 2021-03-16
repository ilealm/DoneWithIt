import React from 'react';
import { View, 
  StyleSheet, 
  // Image,  // BC I need to cache the image, I need to replace this component with image-cache 
  TouchableWithoutFeedback } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler'; NOT FROM HERE!!!
import { Image } from 'react-native-expo-image-cache';

import Text from './Text';
import colors from '../config/colors';

// usually this component is called from ListingScreen

// I need to destructure this props to get the image. remember it has to have {}
// function Card(props) {
function Card({title, subTitle, imageUrl, onPress, thumbnailUrl  }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      {/* this container is the main, where each card is displayed. */}
      <View style={styles.card}>
        {/* <Image style={styles.image} source={image}></Image> */}
        {/* now image is an object, so I need to add {} */}
        {/* this is the image component from react, I need to replace it so I can cache the image */}
        {/* <Image style={styles.image} source={{ uri: imageUrl }} /> */}
        {/* new image-cache. the source is different, and have preview to load the thumbnailUrl  */}
        <Image  style={styles.image} 
                tint='light'  // so the blur loading image doesn't look gray
                preview={{uri: thumbnailUrl }} 
                uri={imageUrl} />
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