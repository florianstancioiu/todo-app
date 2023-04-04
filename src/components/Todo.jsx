import classes from './Todo.module.css';
import IconCross from '../images/icon-cross.svg';
import IconCheck from '../images/icon-check.svg';

const Todo = ({ title, complete }) => {
  const wrapperClasses = complete
    ? `${classes.wrapper} ${classes.completed}`
    : classes.wrapper;

  return (
    <div draggable='true' className={wrapperClasses}>
      <div className={classes.complete}></div>
      <div className={classes['fully-complete']}>
        <img className={classes['check-icon']} src={IconCheck} alt='' />
      </div>
      <p className={classes.title}>{title}</p>
      <img src={IconCross} className={classes.remove} alt='' />
    </div>
  );
};

export default Todo;
