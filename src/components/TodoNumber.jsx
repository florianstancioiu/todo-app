import classes from './TodoNumber.module.css';

const TodoNumber = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes['items-left']}>5 items left</p>
      <p className={classes['clear-completed']}>Clear Completed</p>
    </div>
  );
};

export default TodoNumber;
