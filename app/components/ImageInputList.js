/**
 * This component displays an array of images.
 * Does callback functions to remove and add.
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';


import ImageImput from './ImageImput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  return (
    <View style={styles.container}>
      {/* diaplay current images on the imageUris array */}
      {imageUris.map(uri => (
        <ImageImput 
            imageUri={uri} 
            key={uri}
            onChangeImage={() => onRemoveImage(uri) } 
        /> 
        ))}
     {/* Image input to add a new image */}
     <ImageImput
        onChangeImage={uri => onAddImage(uri)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row', // I want to display the images horizontally
  },
})

export default ImageInputList;