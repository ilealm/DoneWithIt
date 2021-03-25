/**
 * Custom hook to get the user's location
 * For some reason is returning un defined.
 */
import { useState, useEffect } from "react";
import * as Location from 'expo-location';
// import logger from "../utility/logger";
 
 export default useLocation = () => {
   const [location, setLocation] = useState();
 
   //  cant have async fun on useEffect, so I have a separated function
   const getLocation = async () => {
     try {
       const { granted } = Location.requestPermissionsAsync();
       if (!granted) return;
   
       // result of the await has coords, and coord has latitude, longitude
       // Location.getCurrentPositionAsync is more accurate, but for performance, I will use getLastKnownPositionAsync
       // const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
       // {latitude, longitude} are coords properties
       const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
     
       setLocation({latitude, longitude});
       
     } catch (error) {
        console.log(error);
        // logger.log(error);
     }
 
   }
 
   // get the user permissions for the locations
   useEffect(() => {
     getLocation();
   }, []);
  

   return location;
 };
 