import { createAction, createReducer } from '@reduxjs/toolkit';

export const setCurrentWeatherData = createAction('SET_CURRENT_WEATHER_DATA');
export const setHourWeatherData = createAction('SET_HOUR_WEATHER_DATA');
export const setSunAndMoonData = createAction('SET_SUN_MOON_DATA');
export const setWeatherData = createAction('SET_WEATHER_DATA');
export const setLocationName = createAction('SET_LOCATION_NAME');
export const setPrecipitationData = createAction('SET_PRECIPITATION_DATA');
export const clearData = createAction('CLEAR_DATA');

const initialState = {
  data: {
    current: {},
    next_hour: {},
    sun_moon_data: {},
    precipitation_amount: '',
    local_time: '',
    temp_c: '',
    temp_f: '',
    location_name: '',
    sunrise: 'T00:00',
    sunset: 'T00:00',
  },
};

export const weatherReducer = createReducer(initialState, builder => {
  builder
    .addCase(setCurrentWeatherData, (state, action) => {
      state.data.current = action.payload;
    })
    .addCase(setHourWeatherData, (state, action) => {
      state.data.next_hour = action.payload;
    })
    .addCase(setPrecipitationData, (state, action) => {
      state.data.precipitation_amount = action.payload;
    })
    .addCase(setLocationName, (state, action) => {
      state.data.location_name = action.payload;
    })
    .addCase(setSunAndMoonData, (state, action) => {
      state.data.sun_moon_data = action.payload;
      state.data.sunrise = action.payload.sunrise.time;
      state.data.sunset = action.payload.sunset.time;
    })
    .addCase(setWeatherData, (state, action) => {
      state.data = action.payload;
    })
    .addCase(clearData, () => initialState);
});
