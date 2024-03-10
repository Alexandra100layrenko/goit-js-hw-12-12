// pixabay-api.js
import axios from 'axios';

const API_KEY = '42772780-849d5e67a8b9b0ab7e6b7483b';

export default {
  async fetchImages(query, page = 1, perPage = 15) {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
      );

      if (!response.data.hits.length) {
        throw new Error('No images found');
      }

      return response.data.hits;
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  },
};
