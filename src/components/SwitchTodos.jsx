import { useSelector, useDispatch } from 'react-redux';

import classes from './SwitchTodos.module.css';
import { todosActions } from '../store/todos';

const SwitchTodos = () => {
  const filterTodos = useSelector((state) => state.todos.filterTodos);

  const dispatch = useDispatch();

  const allTodosClasses =
    filterTodos === 'all'
      ? `${classes.active} ${classes['all-todos']}`
      : classes['all-todos'];

  const activeTodosClasses =
    filterTodos === 'active'
      ? `${classes.active} ${classes['active-todos']}`
      : classes['active-todos'];

  const completedTodosClasses =
    filterTodos === 'completed'
      ? `${classes.active} ${classes['completed-todos']}`
      : classes['completed-todos'];

  const showAllTodos = () => {
    dispatch(todosActions.filterTodos({ filter: 'all' }));
  };

  const showActiveTodos = () => {
    dispatch(todosActions.filterTodos({ filter: 'active' }));
  };

  const showCompletedTodos = () => {
    dispatch(todosActions.filterTodos({ filter: 'completed' }));
  };

  return (
    <div className={classes.wrapper}>
      <p onClick={() => showAllTodos()} className={allTodosClasses}>
        All
      </p>
      <p onClick={() => showActiveTodos()} className={activeTodosClasses}>
        Active
      </p>
      <p onClick={() => showCompletedTodos()} className={completedTodosClasses}>
        Completed
      </p>
    </div>
  );
};

export default SwitchTodos;
