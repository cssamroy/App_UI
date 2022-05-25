import LocationResponse from "./LocationResponse";
import ReviewResponse from "./ReviewResponse";

export default interface BusinessResponse {
  id: string;
  rating: number;
  name: string;
  location: LocationResponse;
  reviews?: Array<ReviewResponse>
}