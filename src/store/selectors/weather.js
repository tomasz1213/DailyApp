const getWeatherData = state => state?.weather?.data;
const getCurrentWeatherData = state => state?.weather?.data.current;
const getHourWeatherData = state => state?.weather?.data.nextHour;
const getSunAndMoonData = state => state?.weather?.data.sunMoonData;
const getPrecipitationData = state => state?.weather?.data.precipitation_amount;

export const WEATHER_SELECTORS = {
  getWeatherData,
  getCurrentWeatherData,
  getHourWeatherData,
  getPrecipitationData,
  getSunAndMoonData,
};
