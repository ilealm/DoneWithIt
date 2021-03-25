  // esta es localhost, el simulador lo puede ver pero no los dispositivos reales
  // baseURL: 'http://127.0.0.1:9000/api',
  // necesito poner la IP de mi maquina, para q los demas lo puedan ver
  // baseURL: 'http://192.168.1.6:9000/api'
  
import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl : 'http://192.168.1.6:9000/api',
  },
  staging: {
    apiUrl : 'http://192.168.1.6:9000/api',
  },
  prod: {
    apiUrl : 'http://192.168.1.6:9000/api',
  } , 
}


// • To know if I'm in dev environment I can use the global variable __DEV__, which is 
// provided by React Native. If I run the app locally, __DEV__ will return true
const getCurrentSettings = () => {
  if (__DEV__) 
    return settings.dev;

  // if I get to here, I'm or in stagin or production
  // releaseChannel is the one that have the configuration to know which one
  if (Constants.manifest.releaseChannel === 'staging') 
    return settings.staging;
  
  return settings.prod;
}

export default getCurrentSettings();  