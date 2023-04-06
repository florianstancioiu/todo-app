import { useDispatch } from 'react-redux';

import classes from './Todo.module.css';
import IconCross from '../images/icon-cross.svg';
import IconCheck from '../images/icon-check.svg';
import { todosActions } from '../store/todos';

const Todo = ({ id, title, complete }) => {
  const dispatch = useDispatch();
  const wrapperClasses = complete
    ? `${classes.wrapper} ${classes.completed}`
    : classes.wrapper;

  const removeTodo = (id) => {
    dispatch(todosActions.removeTodo({ id }));
  };

  const toggleTodo = (id) => {
    dispatch(todosActions.completeTodo({ id }));
  };

  return (
    <div draggable='true' className={wrapperClasses}>
      {!complete && (
        <div
          onClick={() => {
            toggleTodo(id);
          }}
          className={classes.complete}
        ></div>
      )}
      {complete && (
        <div
          onClick={() => {
            toggleTodo(id);
          }}
          className={classes['fully-complete']}
        >
          <img className={classes['check-icon']} src={IconCheck} alt='' />
        </div>
      )}
      <p className={classes.title}>{title}</p>
      <img
        onClick={() => removeTodo(id)}
        src={IconCross}
        className={classes.remove}
        alt=''
      />
    </div>
  );
};

export default Todo;
