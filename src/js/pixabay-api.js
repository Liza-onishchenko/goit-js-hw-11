
const BASE_URL ='https://pixabay.com/api/';
const API_KEY = '45541862-830ec78a7fc3c846a462bfeb1';

export const fetchPhotos = (searchedQuery) => {
    const urlParams = new URLSearchParams({
        key: API_KEY,
        q: searchedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    
    
   return fetch(`${BASE_URL}?${urlParams.toString()}`)
    .then(response => {
       if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
       } 
       return response.json();
    });
};