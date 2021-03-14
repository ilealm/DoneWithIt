import client from './client';

const endpoint = '/listings';

// const getListings = () => client.get(endpoint);
// example sending args (wont affect BC this wont be used anywhere)
const getListings = (a,b,c) => client.get(endpoint);

// I can export an object
export default{
  getListings,
};

