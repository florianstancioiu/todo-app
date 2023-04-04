import classes from './AddTodo.module.css';

const AddTodo = () => {
  return (
    <div className={classes.wrapper}>
      <input
        type='text'
        className={classes.input}
        placeholder='Create a new todo'
      />
      <div className={classes.circle}></div>
    </div>
  );
};

export default AddTodo;
