import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/'
});

export const BUSINESS_SEARCH = 'businesses/search';
export const BUSINESS_REVIEW = 'businesses/{id}/reviews';