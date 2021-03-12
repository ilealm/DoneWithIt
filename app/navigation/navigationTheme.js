import { DefaultTheme } from '@react-navigation/native';
import colors from '../config/colors';

// with this the main colors will take effect, for example the text for the get back buttons of the navigation

export default {
  ...DefaultTheme,  // copy all the properties that Default Theme has
  // now I'm overwriting the object colors
  colors:{
    // i'm coping all the default theme of colors first
    ...DefaultTheme.colors,
    // now I can overwrite some of its properties
    primary: colors.primary,
    background: colors.white
  }
};