import classes from './Todo.module.css';
import IconCross from '../images/icon-cross.svg';

const Todo = ({ title, complete }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.complete}></div>
      <p className={classes.title}>{title}</p>
      <img src={IconCross} className={classes.remove} alt='' />
    </div>
  );
};

export default Todo;
