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
    color:"tomato",

    // This method returns one of these objs depending on the current platform
    // so I need to spred this objs to access and copy the properties. The spread operator can be 
    // used to take an existing array and add another element to it while still preserving the original array.
    // Platform.select({
    // ...Platform.select({
    //   ios:{
    //     fontSize: 20,
    //     fontFamily: "Avenir",
    //   },
    //   android:{
    //     fontSize: 18,
    //     fontFamily: "Roboto",
    //   },
    })
    // fontSize: 18,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir", //is case sensive
  }
})

export default AppText;