const getWaterData = state => state?.water?.data;
const getLastReset = state => state?.water.lastReset;
const getWaterHistory = state => state?.water.history;

export const WATER_SELECTORS = {
  getWaterData,
  getLastReset,
  getWaterHistory,
};
