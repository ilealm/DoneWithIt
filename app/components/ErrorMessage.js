/**
 * Reusable component to render error messages
 */
import React from 'react';
import { StyleSheet } from 'react-native'

import AppText from './AppText';



function ErrorMessage({error, visible}) {
  // if error is undefined, retirn null
  if (!visible || !error) return null;
  
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