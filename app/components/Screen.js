/**
 * Component to encapsulate the SafeViewArea for both Anroid and iOS
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';  //this don't need to be wrapped in {} 

//  function Screen(props) {
// simplify the idea by deconstructuring the props
// I need to pass the style as a prop, BC is not supported on the caller.
function Screen({children, style }) {
   return (

     //  <SafeAreaView style={styles.screen} >
     // here now I have an array with styles, the one decalred here, and the one send as props
     // to view how the objects take space in the page, uncommnent the lines whit background color
    //  <SafeAreaView style={[styles.screen, style, {backgroundColor:'yellow'}]} >
     <SafeAreaView style={[styles.screen, style]} >
        {/* the padding for the screen for some reason does not apply, to I need to go to Screens
        the padding don't apply horz padding (react thing) (left and right)
        so I need to add a View and then add the padding to the view 
        the style={style} is refering to the style send as prop
        */}
        {/* This second view is not growing to take all the available space, I nee */}
        {/* <View style={[style, {backgroundColor:'orange', flex:1}]}> */}
        <View style={[styles.view, style ]}>
          {/* I'm passing children so I can use this component in the same way I use SafeAreaView. Is same idea on AppText */}
          {children}  
        </View>
     </SafeAreaView>
   );
 }

 
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1, // if I don't use it, the screen only took what it needs. And if I pull to refresh the screen is not cutted.
  },
  view:{
    flex: 1,
  }
})

 export default Screen;