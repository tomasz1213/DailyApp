import {createAction, createReducer} from '@reduxjs/toolkit';

export const setUserData = createAction('SET_USER_DATA');
export const setUserLocation = createAction('SET_USER_LOCATION');
export const setUserGpsLocation = createAction('SET_USER_GPS_LOCATION');
export const clearUserData = createAction('CLEAR_USER_DATA');

const initialState = {
  data: {
    weight: 75,
    needDrink: 2250,
    location: '',
    gpsLocation: '',
  },
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUserData, (state, action) => {
      state.data = {
        weight: action?.payload?.weight,
        needDrink: action?.payload?.needDrink,
      };
    })
    .addCase(setUserLocation, (state, action) => {
      state.data.location = action?.payload;
    })
    .addCase(setUserGpsLocation, (state, action) => {
      state.data.gpsLocation = action?.payload;
    })
    .addCase(clearUserData, () => initialState);
});
