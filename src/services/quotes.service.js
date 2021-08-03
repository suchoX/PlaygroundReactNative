import axios from 'axios';

function fetchKanyeQuotes() {
  return axios.get('https://api.kanye.rest/');
}

export {fetchKanyeQuotes};
