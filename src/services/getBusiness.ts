import businesses from '../data/businesses.json';
import BusinessResponse from '../interfaces/BusinessResponse';
// import API, { BUSINESS_SEARCH } from "../utils/api";

interface Props {
  total: number;
  businesses: Array<BusinessResponse>;
  region: any;
}

const getBusiness = async (params: any): Promise<Props> => {
  return Promise.resolve(businesses);
  // return API.get(BUSINESS_SEARCH, { params });
};

export default getBusiness;
