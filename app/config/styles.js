/**
 * Encapsulate the font for each device.
 * When ever I import this styles, now I have acccess to the color palette
 */
import {  Platform } from 'react-native';

import colors from './colors';

// this default obj represents our text object
export default {
  // this is the same to say colors: colors,
  colors,
  text: {
    color: colors.dark,
    fontSize: 20,
    fontFamily : Platform.OS === "android" ? "Roboto" : "Avenir", 
  },
}
