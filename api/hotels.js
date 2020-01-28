// @flow

const H_BASE_URL = 'https://api.myjson.com/bins/l7j20';

const fetchHotels = () => 
  fetch(H_BASE_URL)
  .then(response => response.json());

export {
  fetchHotels
};