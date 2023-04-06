import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filterTodos: 'all',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos = [action.payload.todo, ...state.todos];
    },
    removeTodo(state, action) {},
    completeTodo(state, action) {},
    setTodos(state, action) {
      state.todos = action.payload.todos;
    },
    clearCompletedTodos(state) {},
    filterTodos(state, action) {},
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
