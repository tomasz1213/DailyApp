const getUserData = state => state?.user?.data;
const getUserPosition = state => state?.user?.data.position;

export const USER_SELECTORS = {
  getUserData,
  getUserPosition,
};
