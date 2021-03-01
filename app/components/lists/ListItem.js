import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// for using this, I need to install the UI library React Native Gesture Handler
import Swipeable from 'react-native-gesture-handler/Swipeable';


import AppText from '../AppText';
import colors from '../../config/colors';
// import defaultStyles from '../config/styles';

// added onPress to let the TouchableHighLight behaves based on its consumer
// IconComponent is a real component passed as props
function ListItem({
  title, 
  subTitle, 
  image, 
  IconComponent, 
  onPress, 
  renderRightActions,
  showChevron,
}) {
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
              {IconComponent}  
              {/* conditional rending in react */}
              {/* render a image ONLY if is provided. */}
              { image && <Image style={styles.image} source={image} />}

              {/* in this container I will lay out vertically */}
              <View style={styles.detailsContainer}>
                <AppText 
                  style={styles.title} numberOfLines={1}>
                    {title}
                </AppText>
                  {/* add conditional render in case I don't have a subtitle */}
                  { subTitle && 
                    <AppText style={styles.subTitle} numberOfLines={2} >
                      {subTitle}</AppText>}
              </View>

              {/* Display the  right chevron only if indicated */}
              {showChevron &&  
                  <MaterialCommunityIcons 
                    color={colors.medium}
                    name= "chevron-right" 
                    size={25}  />   }
           
        
          </View>
        </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center", // align the chevron icon to center
    // I need to set the flex direction to row BS I need to lay out this horiz.
    flexDirection: 'row', // row= left to right. The defaul is column (Top to bottom)
    padding: 15,
    backgroundColor: colors.white,  // if I want this component reusable for any solution, I may need to change this color here.
  },
  detailsContainer:{
    flex:1,
    marginLeft :10,
    justifyContent: 'center',
  },  
  image:{
    width: 70,
    height: 70,
    borderRadius: 35, // to make the image round
  },
  subTitle:{
    color: colors.medium,
  },
  title:{
    fontWeight: "500", 
  },
})


export default ListItem;