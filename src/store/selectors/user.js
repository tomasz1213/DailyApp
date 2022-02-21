const getUserData = state => state?.user?.data;
const getUserLocation = state => state?.user?.data.location;

export const USER_SELECTORS = {
  getUserData,
  getUserLocation,
};
