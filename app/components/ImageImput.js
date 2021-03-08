/**
 * Component that displays an image.
 * The imageUri belongs to the device's camara roll.
 */
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ImageImput( { imageUri }) {
  return (
    <View style={styles.container}>
      {/* If I don't have an Image, display a gray image icon */}
      { !imageUri && ( 
          <MaterialCommunityIcons
          color={colors.medium}
          name="camera"
          size={40} 
            />) }

      {/* If I DO have an Image, display it */}
      { imageUri && 
          <Image 
            source={{uri: imageUri }} 
            style={ styles.image} />
      }

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    alignItems: 'center',  // put here just to have ABC ordering
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow:'hidden', // if I don't do this, the round corners doesn't show
    width: 100,
  },
  image:{
    width:'100%',
    height:'100%',
  },
})

export default ImageImput;