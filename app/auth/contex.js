/**
 * Component to store the user token so the entire App can access it.
 */
import React from 'react';


// Im using pascal convencion BC I will use this obj in the JSX expresions
const AuthContext = React.createContext();

export default AuthContext;