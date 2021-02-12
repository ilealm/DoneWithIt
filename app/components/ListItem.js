import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import AppText from './AppText';


function ListItem({title, subTitle, image}) {
  return (
    // in this container I will lay out horiz
    <View style={styles.container}>
        <Image style={styles.image} source={image} />
        {/* in this container I will lay out vertically */}
        <View>
          <AppText>{title}</AppText>
          <AppText>{subTitle}</AppText>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    // I need to set the flex direction to row BS I need to lay out this horiz.
    flexDirection: 'row', // the defaul os set to column
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10, 
  },
})


export default ListItem;