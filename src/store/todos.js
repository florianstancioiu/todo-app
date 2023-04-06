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
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => {
        if (action.payload.id !== todo.id) {
          return true;
        }

        return false;
      });
    },
    completeTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });
    },
    setTodos(state, action) {
      state.todos = action.payload.todos;
    },
    clearCompletedTodos(state) {
      state.todos = state.todos.filter((todo) => {
        if (!todo.completed) {
          return true;
        }

        return false;
      });
    },
    filterTodos(state, action) {
      const allowedFilters = ['all', 'active', 'completed'];

      if (allowedFilters.includes(action.payload.filter)) {
        state.filterTodos = action.payload.filter;
      }
    },
    switchTodos(state, action) {
      const { dragItemId, dragOverItemId } = action.payload;
      let dragItem;
      let dragItemIndex;
      let dragOverItemIndex;

      for (let i = 0; i < state.todos.length; i++) {
        const currentTodo = state.todos[i];

        if (currentTodo.id === dragItemId) {
          dragItem = currentTodo;
          dragItemIndex = i;
        }

        if (currentTodo.id === dragOverItemId) {
          dragOverItemIndex = i;
        }
      }

      state.todos.splice(dragItemIndex, 1);
      state.todos.splice(dragOverItemIndex, 0, dragItem);
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
