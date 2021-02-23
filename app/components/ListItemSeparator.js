/**
 * Component to add a separatior bettween seccions.
 * For ex. as separator for FlatList's items.
 */

 import React from 'react';
 import { StyleSheet, View } from 'react-native'

 import colors from '../config/colors';

//  I don't need the props, so I can remove it
//  function ListItemSeparator(props) {
function ListItemSeparator() {
   return (
    <View style={styles.separator} />   
   );
 }
 
const styles = StyleSheet.create({
  separator:{
    width:'100%', 
    height:1, 
    backgroundColor: colors.light,   
  }
})
 
 export default ListItemSeparator;