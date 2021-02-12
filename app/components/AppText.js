/**
 * How to encapsulate styles inside a custom components 
 */

import React from 'react';
import { Text } from 'react-native';

// {/* also I could use destructuring for prop argument and access the child */}
function AppText({children}){
  return(
    // <Text style={styles.text}>
    <Text >
      {children} 
    </Text>
  );
}


export default AppText;