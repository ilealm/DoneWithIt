/**
 * How to encapsulate styles inside a custom components 
 */

import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

// {/* also I could use destructuring for prop argument and access the child */}
// I need to pass style prop so I can apply it here.
// I need otherProps to pass props like numberOfLines
function AppText({children, style, ...otherProps}){
  return(
    // here {...otherProps} will truncate the lines to 1, if especified
    <Text style={[defaultStyles.text, style,]}  {...otherProps}   >
      {children} 
    </Text>
  );
}


export default AppText;