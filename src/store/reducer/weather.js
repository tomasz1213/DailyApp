import {createAction, createReducer} from '@reduxjs/toolkit';

export const setData = createAction('SET_DATA');
export const clearData = createAction('CLEAR_DATA');

const initialState = {
  isAuthenticated: false,
  data: {
    name: '',
    local_time: '',
    temp_c: '',
    temp_f: '',
    sunrise: '',
    sunset: '',
    daily_chance_of_rain: '',
  },
};

export const weatherReducer = createReducer(initialState, builder => {
  builder
    .addCase(setData, (state, action) => {
      state.data = {
        name: action?.payload?.location.name || '',
        local_time: action.payload.location.localtime,
        temp_c: action.payload.current.temp_c,
        temp_f: action.payload.current.temp_f,
        sunrise: action.payload.forecast.forecastday[0].astro.sunrise,
        sunset: action.payload.forecast.forecastday[0].astro.sunset,
        daily_chance_of_rain:
          action.payload.forecast.forecastday[0].day.daily_chance_of_rain,
      };
    })
    .addCase(clearData, () => initialState);
});
