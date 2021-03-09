/**
 * Component that displays a single image.
 * The imageUri belongs to the device's camara roll.
 * If the component has a imageUri, it will be displayed, if not, a camara icon is displayed instead.
 * When the user clicks the iamge, can select one from the image library or delete the selected one.
 */
import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


import colors from '../config/colors';

function ImageImput( { imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  // on mounting, this happens once BC useEffect doesn't have any dependencies
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };


  const handlePress = () => {
    // If I don't have an image, I will show the image library
    if (!imageUri) 
      selectImage();
    else  // I have a image loaded
      Alert.alert('Delete', 'Are you sure you want to delete this image?',[
       {text: 'Yes', onPress: () => onChangeImage(null)}, // means there is no image inside the container
       {text:'No'},  ] )
  } 

  
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        // this is the config obj
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // I don't want them to choose videos
        quality:0.5, // 0-1; one is highest quality
      });
      if (!result.cancelled) onChangeImage(result.uri);  //calling the function on the parent
    //  result.cancelled: boolean. If the user don't select anything, cancel returns true
    // result.uri: is the full path to the image
    } catch (error) {
      console.log('Error reading an image.', error);
    } 

    
  };

  return (
    <TouchableWithoutFeedback
      onPress={ handlePress }
    >
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
    </TouchableWithoutFeedback>
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