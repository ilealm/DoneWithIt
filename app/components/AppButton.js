import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

// I'm going to deconstructure the props
// I can have a cleaner and clear code.
// I can set a default value for color
function AppButton({title, onPress, color="primary" }) {
  return (
    // <TouchableOpacity  style={styles.button} onPress={onPress}
    // In the style I will send and array of objs to overrride some styles, by accessing to the name of the obj.
    <TouchableOpacity  style={[styles.button, {backgroundColor:colors[color]}] } onPress={onPress}> 
        <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor : colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15, 
    width: '100%',
    marginVertical: 10,
  },
  text:{
    // color: colors.white,
    color: colors.white, 
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
    
})

export default AppButton;