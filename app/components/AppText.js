import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'

// ORIGINAL WAY, this way doesn't create error doing the destructuring of props
function AppText(props) {
  return (
    <Text style={styles.text} >
      {/* render a special property */}
      {props.children}
    </Text>
  );
}

/**
 * How to encapsulate styles inside a custom components 
 */


// {/* also I could use destructuring for prop argument and access the child */}
// function AppText(children) {
//   return (
//     <Text style={styles.text} >
//       {children}
//     </Text>
//   );
// }

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  }
})

export default AppText;