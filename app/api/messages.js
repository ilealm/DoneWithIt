/**
 * 
 */
import client from './client';

// listingId represents a thread of conversations. I can send n messages to this thread
// in the body of the request I send the input params
const send = (message, listingId) =>
  client.post("/messages",{
    message,
    listingId,
  });

  export default {
    send,
  };