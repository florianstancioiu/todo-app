import { useSelector, useDispatch } from 'react-redux';

import classes from './TodoNumber.module.css';
import SwitchTodos from './SwitchTodos';
import { todosActions } from '../store/todos';

const TodoNumber = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  let noActiveTodos = 0;

  todos.map((todo) => {
    if (!todo.completed) {
      noActiveTodos++;
    }
  });

  const clearCompleted = () => {
    dispatch(todosActions.clearCompletedTodos());
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes['items-left']}>{noActiveTodos} items left</p>
      <SwitchTodos />
      <p onClick={clearCompleted} className={classes['clear-completed']}>
        Clear Completed
      </p>
    </div>
  );
};

export default TodoNumber;
