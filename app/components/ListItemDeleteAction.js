import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


// onPress is a function passed from "the outside", the caller/parent
function ListItemDeleteAction({ onPress }) {
  return (
    // To delete an item, I need to wrap this a touchable component to handle the onPress event
    // onPress will receive the action to behave depenging on its caller.
    // when I add teh next line, the trash can gets smaller
    <TouchableWithoutFeedback onPress={ onPress } >
      <View style={styles.container}>
        <MaterialCommunityIcons 
          name= 'trash-can'
          size={35}
          color={colors.white} 
        />
      </View>
    </TouchableWithoutFeedback>


    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",  // this fixed the hight of the trash-can when swipped to left
    justifyContent: "center",
    alignItems: "center",
  }
})

export default ListItemDeleteAction;