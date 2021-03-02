import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../AppText';
import Icon from '../Icon';


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
      <AppText style={styles.label} > {item.label} </AppText>
    </View>

  ) ;  
}

const styles = StyleSheet.create({
  container:{    
    // in this case the def. axis is vertical
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center", // to aling the labels with the icons
    width: '33%', // to wrap long AppText in the same column 
  },
  label:{
    marginBottom: 15,
    textAlign: "center",  // to center text that is wrapped in the column
  },
})

export default CategoryPickerItem;