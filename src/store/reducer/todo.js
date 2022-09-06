import { createAction, createReducer } from '@reduxjs/toolkit';

export const setTodoData = createAction('SET_TODO_DATA');
export const setTodoDone = createAction('SET_TODO_DONE');
export const clearTodoData = createAction('CLEAR_TODO_DATA');

const initialState = {
  todo: {
    done: [],
    ready: [
      {
        title: 'Test Task',
        isDone: false,
        time: { from: '', to: '' },
        body: '',
        alert: false,
        id: 0,
      },
      {
        title: 'Test Task NotDOne',
        isDone: false,
        time: { from: '', to: '' },
        body: '',
        alert: false,
        id: 1,
      },
    ],
  },
  note: [],
  data: {
    id: 0,
    title: '',
    isDone: false,
    time: { from: '', to: '' },
    body: '',
    alert: false,
  },
};

export const todoReducer = createReducer(initialState, builder => {
  builder
    .addCase(setTodoData, (state, action) => {
      (state.todo = action?.payload?.todo || []),
        (state.note = action?.payload?.note || []),
        (state.data = { ...state.data, ...action.payload });
    })
    .addCase(setTodoDone, (state, action) => {
      const tasksNotDone = state.todo.ready.filter(
        el => el.id !== action.payload.id,
      );
      const taskDone = state.todo.ready.find(el => el.id === action.payload.id);
      state.todo.ready = tasksNotDone;
      state.todo.done.push(taskDone);
    })
    .addCase(clearTodoData, () => initialState);
});
