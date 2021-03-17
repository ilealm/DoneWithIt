/**
 * API to validate user authentication.
 */

import client from './client';

const endpoint = '/auth';

// const login = (email, password) => client.post('/auth', {email, password});
const login = (email, password) => client.post(endpoint, {email, password});

export default {
  login, 
}