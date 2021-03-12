/**
 * Because this is not a component that will be reused in the app, I can create this component here.
 * This is going to be used in this tabs.
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor: colors.primary,
    borderColor: colors.white, 
    borderRadius: 40,  // to make it round I need the half of the size (80/2)
    borderWidth:10, 
    bottom:20,
    height: 80,
    justifyContent:'center',
    width: 80,
  },
})

export default NewListingButton;
