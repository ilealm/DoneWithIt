/**
 * Module in charge of storing and retriving the user's auth token.
 * Persisting the Authtentication State, so I can keep the user log in across app restarts
 * In order to do so, I need to save it in a persistent storage, and then restore it when
 * the app starts.
 * Im using SecureStore in Expo
 */
import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "authToken";

// IMPORTANT to handle error here!
const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);    
  } catch (error) {
    console.log('Error storing the auth token.', error);
  }
}


const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error getting the auth token.', error);
  }
}

const getUser = async () => {
  const token = await getToken();

  return (token) ? jwtDecode(token) : null;
  
}


// used when the user logs out
const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error removing the auth token.', error);
  }
}

export default {
  storeToken,
  getToken,
  getUser,  // I change this BC this module should have the interaction with the auth
  removeToken,
};