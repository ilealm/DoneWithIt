/**
 * This component displays an array of images.
 * Does callback functions to remove and add.
 */
import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';


import ImageImput from './ImageImput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  // in order to get auto scrolling, I need to implement useRef
  const scrollView = useRef();  // returns a general reference object
  // with scrollView.current. I can access all its methods



  return (
    // I need to add scrollview so if I have more images that can fix in the screen, the rest of the images are shown in the next line
    // by default is vertical scroll bar. If I want it horizontal: horizontal={true} or just horizontal
    // I'm adding this view BC ScrollView will take all the available space, so I need a way to contain it.
    <View>      
      <ScrollView
        ref={scrollView} 
        horizontal 
        onContentSizeChange={() => scrollView.current.scrollToEnd() } 
      >
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
      </ScrollView> 
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