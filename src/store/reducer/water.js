import {createAction, createReducer} from '@reduxjs/toolkit';

export const setWaterData = createAction('SET_WATER_DATA');
export const clearWaterData = createAction('CLEAR_WATER_DATA');

const initialState = {
  data: {
    glassSize: 250,
    waterDrink: 0,
  },
};

export const waterReducer = createReducer(initialState, builder => {
  builder
    .addCase(setWaterData, (state, action) => {
      state.data = {
        glassSize: action?.payload?.glassSize || 250,
        waterDrink: action?.payload?.waterDrink || 0,
      };
    })
    .addCase(clearWaterData, () => initialState);
});
