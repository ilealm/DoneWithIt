/**
 * Reusable component to render error messages
 */
import React from 'react';
import { StyleSheet } from 'react-native'

import AppText from './AppText';



function ErrorMessage({error}) {
  // if error is undefined, retirn null
  if (!error) return null;
  return (
     <AppText style={styles.error}> {error}  </AppText> 
  );
}

const styles = StyleSheet.create({
  error:{
    color:'red',
  }
})

export default ErrorMessage;