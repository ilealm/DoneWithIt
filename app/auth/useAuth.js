/**
 * Function to control the useContex for the user
 */

import { useContext } from 'react';
import jwtDecode from 'jwt-decode';


import AuthContext from './context';
import authStorage from './storage';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);


  const logIn = (authToken) => {
    // decode and log the user object and store it to make it available to the complete app
    const user = jwtDecode(authToken)
     // here app.js will re-render BC when I change a context, all its children gets re-render, and BC there is
    // now a user, I got send to listings (AppNavigator)
    setUser(user);
    // now store the app token. I rename storage to authStorage
    authStorage.storeToken(authToken);
  };


  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
}