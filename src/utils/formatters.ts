import LocationResponse from "../interfaces/LocationResponse"

export const formatLocation = (location: LocationResponse) => {
  return `${[
    location.address1,
    location.address2,
    location.address3,
    location.state,
  ]
    .filter(item => !!item)
    .join(', ')}`;
}