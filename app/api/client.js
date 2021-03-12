import { create } from 'apisauce';

// URL MUST be capitalized letters. 
// in development, is pointing to my machine. DO NOT use localhost BC andriod is not going to be able to see the API
const apiClient = create({
  baseURL: '"http://127.0.0.1:9000/api'
});

export default apiClient;