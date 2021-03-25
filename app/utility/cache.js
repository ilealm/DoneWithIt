/**
 * Layer to cache info. in local storage
 * I can set and get.
 * AsyncStorage from react-native is depricated, in later deploys try to change to 
 * the newer version in expo ecosystem
 * https://react-native-async-storage.github.io/async-storage/docs/usage/
 */
import { AsyncStorage } from 'react-native';
// import moment from 'moment'; I not longer use this BC is to heavy. Replace it with dayjs
import dayjs from 'dayjs';
// import logger from './logger';

const prefix = 'cache'; //I dont need this, is just to have more explicit code
const expiryInMinutes = 5; // here I can declare the time I want. In this case I will say that if the item is old by 5 min, is expired

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestam: Date.now()  // I should add this so it can become expirec
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));

  }
  catch(error) {
    console.log(error);
    // logger.log(error);
  }
}


// BC get only should return an item, I need to have a function that detects if the item is expired or not.
const isExpired = (item) => {
  // const now = moment(Date.now());
  // const storedTime = moment(item.timestam);    
  // return now.diff(storedTime, 'minutes') > expiryInMinutes;  

  const now = dayjs(); // WO arguents will return the current daytime
  const storedTime = dayjs(item.timestam);    

  return now.diff(storedTime, 'minute') > expiryInMinutes;  
}


// this fun only should return the item
const get = async (key) => {
  try{
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    // if the item does't exist
    if (!item) return null;

    // the item exist, but is expired. (I need to have moment instaled)
    if (isExpired(item)){
      // note, here I'm breaking the Command Query Separation (CQS) but is on in this case.
      AsyncStorage.removeItem(prefix + key); // clear cache
      return null;
    }

    // here I have an item that is not expired
    return item.value;
  }
  catch(error){
    console.log(error);
    // logger.log(error);
  }
}

export default {
  store,
  get,
}