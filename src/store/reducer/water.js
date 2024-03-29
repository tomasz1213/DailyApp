import { createAction, createReducer } from '@reduxjs/toolkit';

export const setWaterData = createAction('SET_WATER_DATA');
export const setLastReset = createAction('SET_LAST_RESET');
export const setGlassSize = createAction('SET_GLASS_SIZE');
export const setWaterHistory = createAction('SET_WATER_HISTORY');
export const clearWaterData = createAction('CLEAR_WATER_DATA');

const initialState = {
  data: {
    glassSize: 200,
    waterDrink: 0,
  },
  history: [],
  lastReset: '',
};

export const waterReducer = createReducer(initialState, builder => {
  builder
    .addCase(setWaterData, (state, action) => {
      state.data.waterDrink = action?.payload;
    })
    .addCase(setGlassSize, (state, action) => {
      state.data.glassSize = action?.payload;
    })
    .addCase(setWaterHistory, (state, action) => {
      state.history.push(action?.payload);
    })
    .addCase(setLastReset, (state, action) => {
      state.lastReset = action.payload;
    })
    .addCase(clearWaterData, () => initialState);
});
