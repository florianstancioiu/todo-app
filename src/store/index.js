import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './todos';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
