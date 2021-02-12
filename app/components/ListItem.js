import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText';

import colors from '../config/colors';

function ListItem({title, subTitle, image}) {
  return (
    // in this container I will lay out horiz
    <View style={styles.container}>
        <Image style={styles.image} source={image} />
        {/* in this container I will lay out vertically */}
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // I need to set the flex direction to row BS I need to lay out this horiz.
    flexDirection: 'row', // the defaul is set to column
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 35, // to make the image round
    marginRight: 10, 
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