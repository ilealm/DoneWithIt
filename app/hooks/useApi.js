/**
 * Hook to call all API endpoints
 */
import { useState } from 'react';


export default useAPI = ( apiFunc ) => {
  // var to store the listings I get from the server
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  // request represents the request to the server
  // if I want to pass arguments, use the spred operator
  //   const request = async (...args) => {
  const request = async () => {

    setLoading(true);
    // this promise will be always resolve (apisouce), even it I get an error. I don't need try catch
    // const response = await listingsApi.getListings(); 
    // exaple sending args
    // const response = await apiFunc(...args); 
    const response = await apiFunc(); 
    setLoading(false);

    if (!response.ok) return setError(true);
      
    setError(false);
    setData(response.data);
  };

  return { data, error, loading, request };
}