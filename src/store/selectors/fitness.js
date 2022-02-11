const getSleepData = state => state?.sleep;
const getStepsData = state => state?.fitness.steps;
const getDistanceData = state => state?.fitness.distance;
const getCaloriesData = state => state?.fitness.calories;

export const FIT_SELECTORS = {
  getSleepData,
  getStepsData,
  getDistanceData,
  getCaloriesData,
};
