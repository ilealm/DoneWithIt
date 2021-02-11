/**
 * How to encapsulate styles inside a custom components 
 */

import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

// ORIGINAL WAY
// function AppText(props) {
//   return (
//     <Text style={styles.text} >
//       {/* render a special property */}
//       {props.children}
//     </Text>
//   );
// }


// {/* also I could use destructuring for prop argument and access the child */}
function AppText({children}){
  return(
    <Text style={styles.text}>
      {children} 
    </Text>
  );
}


const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", //is case sensive
  }
})

export default AppText;