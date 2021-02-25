/**
 * Component to encapsulate the SafeViewArea for both Anroid and iOS
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';  //this don't need to be wrapped in {} 

//  function Screen(props) {
// simplify the idea by deconstructuring the props
// I need to pass the style as a prop, BC is not supported on the caller.
function Screen({children, style }) {
   return (
    //  <SafeAreaView style={styles.screen} >
    // here now I have an array with styles, the one decalred here, and the one send as props
     <SafeAreaView style={[styles.screen, style]} >
       {/* I'm passing children so I can use this component in the same way I use SafeAreaView. Is same idea on AppText */}
       {children}  
     </SafeAreaView>
   );
 }

 
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1, // if I don't use it, the screen only took what it needs. And if I pull to refresh the screen is not cutted.
  }
})

 export default Screen;