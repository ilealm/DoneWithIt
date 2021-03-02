import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from './Icon';
import Text from './Text';


function CategoryPickerItem({ 
    item,  
    onPress}) {
  return (
    <View style={styles.container}>
      <Icon 
        backgroundColor={item.backgroundColor} 
        name={item.icon} 
        size={80}
      />
      <Text style={styles.label} > {item.label} </Text>
    </View>

  ) ;  
}

const styles = StyleSheet.create({
  container:{    
    // in this case the def. axis is vertical
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center", // to aling the labels with the icons
    width: '33%', // to wrap long Text in the same column 
  },
  label:{
    marginBottom: 15,
    textAlign: "center",  // to center text that is wrapped in the column
  },
})

export default CategoryPickerItem;