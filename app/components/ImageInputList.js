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
        <View 
        // I need to set the key here, BC this is the container.
          key={uri} 
          style={styles.image} //I need to put the style here BC is not supported in the component
          > 
          <ImageImput 
              imageUri={uri} 
              
              onChangeImage={() => onRemoveImage(uri) } 
          /> 
        </View>
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
  image:{
    marginRight:10,
  },
})

export default ImageInputList;