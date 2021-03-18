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
  //   const request = async () => {
  // if I want to pass ZERO or more arguments, use the spred operator (put them inside a single array)
  const request = async (...args) => {

    setLoading(true);
    // this promise will be always resolve (apisouce), even it I get an error. I don't need try catch
    // const response = await listingsApi.getListings(); 
    // exaple sending args
    // const response = await apiFunc(...args); 
    const response = await apiFunc(...args); 
    setLoading(false);

    // if (!response.ok) return setError(true);
      
    // setError(false);
    // setData(response.data);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
}