import {createAction, createReducer} from '@reduxjs/toolkit';

export const setUserData = createAction('SET_USER_DATA');
export const clearUserData = createAction('CLEAR_USER_DATA');

const initialState = {
  data: {
    weight: 75,
    needDrink: 2250,
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
    .addCase(clearUserData, () => initialState);
});
