import UserResponse from "./UserResponse";

export default interface ReviewResponse {
  id: string;
  rating: number;
  user: UserResponse;
  text: string;
  time_created: string;
  url: string;
};
