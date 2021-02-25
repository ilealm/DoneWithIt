/**
 * How to encapsulate styles inside a custom components FOR android
 */

import React from 'react';
import { Text, StyleSheet,  } from 'react-native';

import colors from '../config/colors';

function AppText({children, style}){
  return(
    // <Text style={styles.text}>
    //   {children} 
    // </Text>
    // I'm adding an array so I can receive the style as a prop
    <Text style={[styles.text, style]}>
      {children} 
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
    // color: colors.primary,
    color: colors.black,
    fontSize: 20,
    fontFamily: "Roboto",
  }
})

export default AppText;