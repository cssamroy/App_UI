import reviews from '../data/reviews.json';
import ReviewResponse from '../interfaces/ReviewResponse';
// import API, { BUSINESS_REVIEW } from '../utils/api';

interface Props {
  total: number;
  reviews: Array<ReviewResponse>;
  possible_languages: any;
}

const getReviews = async (params: any): Promise<Props> => {
  return Promise.resolve(reviews);
  // return API.get(BUSINESS_REVIEW.replace('{id}', params.id));
};

export default getReviews;
