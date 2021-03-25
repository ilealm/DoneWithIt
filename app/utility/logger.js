/**
 * This is my logger service.
 * Here sis the only place I say which reporting tool I'm using. 
 * This is the only place in the app where I talk to bugsnag
 */

// I removed this lines that bugsnag added to app.js, BC now the logic is handled here.
// import Bugsnag from '@bugsnag/expo';
// Bugsnag.start();

 import Bugsnag from '@bugsnag/expo';
 
 const log = (error) => Bugsnag.notify(error);
 
//  implement the start method of Bugsnag here
const start = () => Bugsnag.start();

export default {
  log,
  start,
};