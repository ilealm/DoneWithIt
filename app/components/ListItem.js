import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import AppText from './AppText';
// for using this, I need to install the UI library React Native Gesture Handler
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

// added onPress to let the TouchableHighLight behaves based on its consumer
// ImageComponent is a real component passed as props
function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
  return (
    // this one is for swaping to the left
    <Swipeable
      renderRightActions={renderRightActions} >

        {/* for TouchableHighlight I need to handle the onPress event */}
        {/* this one is for clicking on the element */}
        <TouchableHighlight 
          onPress={onPress}  // what this does should be in base of the component's consumer
          underlayColor={colors.light}  // black is default
          >  
        {/* in this container I will lay out horiz */}
          <View style={styles.container}>
              {/* if I don't pass the props, no error is raised. */}
              {ImageComponent}  
              {/* conditional rending in react */}
              {/* render a image ONLY if is provided. */}
              { image && <Image style={styles.image} source={image} />}

              {/* in this container I will lay out vertically */}
              <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {/* add conditional render in case I don't have a subtitle */}
                { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
              </View>
          </View>
        </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container:{
    // I need to set the flex direction to row BS I need to lay out this horiz.
    flexDirection: 'row', // row= left to right. The defaul is column (Top to bottom)
    padding: 15,
  },
  detailsContainer:{
    marginLeft :10,
    justifyContent: 'center',
  },  
  image:{
    width: 70,
    height: 70,
    borderRadius: 35, // to make the image round
    // marginRight: 10, 
    // marginLeft:20, // i will not let this here BC i want to have a reusable component 
  },
  subTitle:{
    color: colors.medium,
  },
  title:{
    fontWeight: "500", 
  },
})


export default ListItem;