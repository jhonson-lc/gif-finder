import { API_KEY, API_URL } from './settings.js';

const fromAPIResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse;
  return data;
};

export default async function getTrendingSearches() {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromAPIResponseToGifs);
}
