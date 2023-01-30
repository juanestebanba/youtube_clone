import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: 50,
  },
  headers: {
    // This API key shouldn't be exposed here. It should be showed as a variable like process. 
    // API-KEY and stored with the "secrets" feature of Replit, but the tool isn't working for some reason with this key. 
    'X-RapidAPI-Key': 'EDITED',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
