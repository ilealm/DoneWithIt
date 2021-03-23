/**
 * File to store and manage the navigation ref, to that when the user clicks on a notification, I can do things
*/
import React from 'react';

// refHook to access to the navigation object in AppNavigator, so that I can do things when the user clicks a notification
export const navigationRef = React.createRef();
// when I use this, I need to call it between {}
// import { navigationRef } from './rootNavigation';

// name, params are the params of the navigator method
const navigate = (name, params) =>
  // if I call this method to early, current will return null. It will inicialize when the navigationContainer is rendered
  // if (!navigationRef.current)
  //   navigationRef.current.navigate(name, params);
  // I can REWRITE this expresion with the null coalescing (?). 
  // this is using ? before . which means if the object is not null, then call the method
  navigationRef.current?.navigate(name, params)
;

export default {
  navigate,
};