import classes from './TodoNumber.module.css';
import SwitchTodos from './SwitchTodos';

const TodoNumber = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes['items-left']}>5 items left</p>
      <SwitchTodos />
      <p className={classes['clear-completed']}>Clear Completed</p>
    </div>
  );
};

export default TodoNumber;
