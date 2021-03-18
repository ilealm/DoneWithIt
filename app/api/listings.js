import client from './client';

const endpoint = '/listings';

// this method get the info, from the backEnd point of cache if existing
const getListings = () => client.get(endpoint);
// 

const addListing = (listing, onUploadProgress ) => {
  // each http request has a special header called content-type
  // for upload files and images: multipart/form-data tells the server that the body of the info is diveded in multiple parts
  // FormData auto says is multipart/form-data
  const data = new FormData();
  data.append('title', listing.title);  // key, value
  data.append('price', listing.price);  
  data.append('categoryId', listing.category.value);  // category is an object  
  data.append('description', listing.description);  
  // I can have more than 1 image
  listing.images.forEach( (image, index) => 
    data.append('images', {
        name: 'image' + index,
        type: 'iamge/jpeg',
        uri: image
    }));

    if (listing.location)
      data.append(location, JSON.stringify(listing.location));  // i need to pass it to text

    return client.post(endpoint, data, {
      // this fun is called repetly while the request is been sent
      // onUploadProgress: progress => console.log(progress)
      // and this object returns 
      // Event {
      //   "isTrusted": false,
      //   "lengthComputable": true,
      //   "loaded": 3177277,
      //   "total": 3177277,
      // }
      // onUploadProgress: progress => console.log(progress.loaded / progress.total),
      // BUT with this approach, I have access to the progress in the UI layer, and then be able to display a prgress bar to the user.
        onUploadProgress: (progress) => {
          onUploadProgress(progress.loaded / progress.total)
        }
    }
      
      );  // this post returns a promise
}

// I can export an object
export default{
  // expose our functions
  getListings,
  addListing, 
};

