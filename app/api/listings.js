import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

// I can export an object
export default{
  getListings,
};