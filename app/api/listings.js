import client from './client';

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

// const addListing = listing => {
//     const data = new FormData();
//     data.append('clientInfo[name]', listing.name);
//     data.append('clientInfo[email]', listing.email);
//     data.append('clientInfo[phone]', listing.phone);
//     data.append('artist', listing.artist);
//     data.append('date', listing.date);
//     data.append('time', listing.time);
//     data.append('services', listing.services);
    
    
//     return client.post(endpoint, data);
// }

export default {
    //addListing,
    getListings,
};