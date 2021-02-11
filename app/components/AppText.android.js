/**
 * How to encapsulate styles inside a custom components FOR android
 */

import React from 'react';
import { Text, StyleSheet,  } from 'react-native';

function AppText({children}){
  return(
    <Text style={styles.text}>
      {children} 
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
    color:"blue",
    fontSize: 25,
    fontFamily: "Roboto",
  }
})

export default AppText;