/**
 * Because Picker is depracated, I'm creatrig my own component that behaves the same
 */
import React from 'react';
import { View, StyleSheet  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';

// I can use the rest operator "..." and get the rest of the props and put inside a single object. Whatever those props are
// For instance, if this.props contained a: 1 and b: 2, then
// <Modal {...this.props} title='Modal heading' animation={false}>
// would be the same as
// <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>

function AppPicker({ icon, placeholder,  ...otherProps }) {
  return (
    <View style={styles.container}>
      {/* Render this ONLY if icon is defined */}
      {icon && <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        color={defaultStyles.colors.medium} 
        style={styles.icon}  /> }
      {/* and here I will apply whatever pros I have sent */}
     <AppText style={styles.text}> {placeholder} </AppText>
     <MaterialCommunityIcons 
        name= "chevron-down" 
        size={20} 
        color={defaultStyles.colors.medium}   />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row", // left to right, so I can have the icon and text in the same row. (horiz)
    width:'100%',
    padding: 15,
    marginVertical: 10,   // to separate multiple textInputs in the same screen
  },
  icon:{
    marginRight:10,
  },
  text:{
    flex: 1, // this is what  moves the down icon (chevron) to the right
  },
})

export default AppPicker;