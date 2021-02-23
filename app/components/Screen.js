/**
 * Component to encapsulate the SafeViewArea for both Anroid and iOS
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';  //this don't need to be wrapped in {} 

//  function Screen(props) {
// simplify the idea by deconstructuring the props
function Screen({children}) {
   return (
     <SafeAreaView style={styles.screen} >
       {/* I'm passing children so I can use this component in the same way I use SafeAreaView. Is same idea on AppText */}
       {children}  
     </SafeAreaView>
   );
 }

 
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight
  }
})

 export default Screen;