/**
 * Single module to talk to the server.
 * Single place to retrive data.
 * Caching logic should be implemented here. 
 * In some cases: If I succesfuly get the info, I'm caching it if not and I have it in cache I retrive it
 */
import { create } from 'apisauce';
import cache from '../utility/cache';

// URL MUST be capitalized letters. 
// in development, is pointing to my machine. DO NOT use localhost BC andriod is not going to be able to see the API
const apiClient = create({
  baseURL: 'http://127.0.0.1:9000/api',
});

// Change the implementation of the get method
// Before getting info from apiClient.get I need to check if there is cache info. 
// So I need to create a reference to apiClient 
const get = apiClient.get;
// redifine apiClient.get. I will receive the same params as the original get method
apiClient.get = async (url, params, axiosConfing) => {

  // original get method
  const response = await get(url, params, axiosConfing);

  if (response.ok) {
    // here I'm caching everything, which is not what I may need in all scenarios
    cache.store(url, response.data); // key, value
    return response;  // here I'm returning the same as the original get method
  }

  // if I make the this point, means I dont' have connection, so I need to get the data in the cache if existing
  const data = await cache.get(url); // url is the key
  return data ? {ok: true, data} : response; 
}


export default apiClient;

