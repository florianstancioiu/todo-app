import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filterTodos: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {},
    removeTodo(state, action) {},
    completeTodo(state, action) {},
    clearCompletedTodos(state) {},
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
