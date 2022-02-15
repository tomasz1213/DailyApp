import {createAction, createReducer} from '@reduxjs/toolkit';

export const setUserData = createAction('SET_USER_DATA');
export const setUserPosition = createAction('SET_USER_POSITION');
export const clearUserData = createAction('CLEAR_USER_DATA');

const initialState = {
  data: {
    weight: 75,
    needDrink: 2250,
    position: '',
  },
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUserData, (state, action) => {
      state.data = {
        weight: action?.payload?.weight || 75,
        needDrink: action?.payload?.needDrink || 2250,
      };
    })
    .addCase(setUserPosition, (state, action) => {
      state.data.position = action?.payload || '';
    })
    .addCase(clearUserData, () => initialState);
});
