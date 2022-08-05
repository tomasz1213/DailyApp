import { createAction, createReducer } from '@reduxjs/toolkit';

export const setUserData = createAction('SET_USER_DATA');
export const setUserLocation = createAction('SET_USER_LOCATION');
export const setUserGpsLocation = createAction('SET_USER_GPS_LOCATION');
export const setIsGpsOn = createAction('SET_IS_GPS_ON');
export const clearUserData = createAction('CLEAR_USER_DATA');
export const registerUser = createAction('REGISTER');
export const loginUser = createAction('LOGIN');
export const setIsAuthenticated = createAction('SET_AUTHENTICATED');

const initialState = {
  data: {
    weight: 75,
    needDrink: 2250,
    location: '',
    gpsLocation: '',
    isGpsOn: false,
    token: '',
    name: '',
    email: '',
    login: '',
    isAuthenticated: false,
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
    .addCase(registerUser, (state, action) => {
      state.data = {
        ...state.data,
        token: action?.payload?.token,
        name: action?.payload?.name,
        email: action?.payload?.email,
        login: action?.payload?.login,
        isAuthenticated: action.payload.isAuthenticated,
      };
    })
    .addCase(setIsAuthenticated, (state, action) => {
      state.data = {
        ...state.data,
        token: action?.payload?.token,
        login: action?.payload?.login,
        isAuthenticated: action.payload.isAuthenticated,
      };
    })
    .addCase(setUserGpsLocation, (state, action) => {
      state.data.gpsLocation = action?.payload;
    })
    .addCase(setIsGpsOn, (state, action) => {
      state.data.isGpsOn = action?.payload;
    })
    .addCase(clearUserData, () => initialState);
});
