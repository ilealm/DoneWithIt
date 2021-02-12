/**
 * How to encapsulate styles inside a custom components 
 */

import React from 'react';
import { Text } from 'react-native';

// {/* also I could use destructuring for prop argument and access the child */}
// I need to pass style prop so I can apply it here.
function AppText({children, style}){
  return(
    // <Text style={styles.text}>
    // <Text >
    //   {children} 
    // </Text>
    <Text style={[styles.text, style]}>
      {children} 
    </Text>
  );
}


export default AppText;