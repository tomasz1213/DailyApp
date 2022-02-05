const getToDoData = state => state?.todo?.data;
const getToDo = state => state?.todo;
const getToDoNote = state => state?.todo?.note;

export const TODO_SELECTORS = {
  getToDoData,
  getToDo,
  getToDoNote,
};
