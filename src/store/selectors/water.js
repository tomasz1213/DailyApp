const getWaterData = state => state?.water?.data;
const getLastReset = state => state?.water.lastReset;

export const WATER_SELECTORS = {
  getWaterData,
  getLastReset,
};
