/**
 * Reusable component to render error messages
 */
import React from 'react';
import { StyleSheet } from 'react-native'

import Text from '../Text';



function ErrorMessage({error, visible}) {
  // if error is undefined, retirn null
  if (!visible || !error) return null;
  
  return (
     <Text style={styles.error}> {error}  </Text> 
  );
}

const styles = StyleSheet.create({
  error:{
    color:'red',
  }
})

export default ErrorMessage;