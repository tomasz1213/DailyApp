import {createAction, createReducer} from '@reduxjs/toolkit';

export const setCurrentWeatherData = createAction('SET_CURRENT_WEATHER_DATA');
export const setHourWeatherData = createAction('SET_HOUR_WEATHER_DATA');
export const setSunAndMoonData = createAction('SET_SUN_MOON_DATA');
export const setPrecipitationData = createAction('SET_PRECIPITATION_DATA');
export const clearData = createAction('CLEAR_DATA');

const initialState = {
  isAuthenticated: false,
  data: {
    current:{},
    nextHour:{},
    sunMoonData:{},
    precipitation_amount:'',
    local_time: '',
    temp_c: '',
    temp_f: '',
    sunrise: '',
    sunset: '',
  },
};

export const weatherReducer = createReducer(initialState, builder => {
  builder
    .addCase(setCurrentWeatherData, (state, action) => {
      state.data.current = action.payload;
    })
    .addCase(setHourWeatherData, (state, action) => {
      state.data.nextHour = action.payload;
    })
    .addCase(setPrecipitationData, (state, action) => {
      state.data.precipitation_amount = action.payload;
    })
    .addCase(setSunAndMoonData, (state, action) => {
      state.data.sunMoonData = action.payload;
    })
    .addCase(clearData, () => initialState);
});
