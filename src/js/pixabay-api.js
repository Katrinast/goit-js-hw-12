import axios from 'axios'

const API_KEY = '44009462-82273816cd5912ea13bf70156';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = BASE_URL;

export const fetchImages = async (query, page = 1, perPage = 15) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    }
  });
  return response.data;
} 