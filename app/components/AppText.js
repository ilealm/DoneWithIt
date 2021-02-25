/**
 * How to encapsulate styles inside a custom components 
 */

import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

// {/* also I could use destructuring for prop argument and access the child */}
// I need to pass style prop so I can apply it here.
function AppText({children, style}){
  return(
    <Text style={[defaultStyles.text, style]}>
      {children} 
    </Text>
  );
}


export default AppText;