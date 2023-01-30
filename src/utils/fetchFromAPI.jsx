import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': 'cb3126396bmsh741fe3ee1ade4f6p1f7527jsn73827890db17',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};