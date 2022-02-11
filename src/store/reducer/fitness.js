import {createAction, createReducer} from '@reduxjs/toolkit';

export const setStepsData = createAction('SET_STEPS_DATA');
export const setCaloriesData = createAction('SET_CALORIES_DATA');
export const setDistanceData = createAction('SET_DISTANCE_DATA');
export const setSleepData = createAction('SET_SLEEP_DATA');
export const clearFITData = createAction('CLEAR_FIT_DATA');

const initialState = {
  steps: [],
  calories: [],
  distance: [],
  sleep: [],
};

export const FITReducer = createReducer(initialState, builder => {
  builder
    .addCase(setStepsData, (state, action) => {
      state.steps = action?.payload || [];
    })
    .addCase(setCaloriesData, (state, action) => {
      state.calories = action?.payload || [];
    })
    .addCase(setDistanceData, (state, action) => {
      state.distance = action?.payload || [];
    })
    .addCase(setSleepData, (state, action) => {
      state.sleep = action?.payload || [];
    })
    .addCase(clearFITData, () => initialState);
});
