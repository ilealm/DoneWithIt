/**
 * How to encapsulate styles inside a custom components FOR iOS
 */

import React from 'react';
import { Text, StyleSheet,  } from 'react-native';

import colors from '../config/colors.js';


function AppText({children, style}){
  return(
    // <Text style={styles.text}>
    //   {children} 
    // </Text>
    <Text style={[styles.text, style]}>
      {children} 
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
    // color: colors.primary,
    fontSize: 20,
    fontFamily: "Avenir",
  }
})

export default AppText;