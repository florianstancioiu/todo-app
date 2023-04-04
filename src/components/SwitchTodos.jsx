import { useState } from 'react';
import classes from './SwitchTodos.module.css';

const SwitchTodos = () => {
  const [activeClass, setActiveClass] = useState('all');
  const allTodosClasses =
    activeClass === 'all'
      ? `${classes.active} ${classes['all-todos']}`
      : classes['all-todos'];
  const activeTodosClasses =
    activeClass === 'active'
      ? `${classes.active} ${classes['active-todos']}`
      : classes['active-todos'];
  const completedTodosClasses =
    activeClass === 'completed'
      ? `${classes.active} ${classes['completed-todos']}`
      : classes['completed-todos'];

  return (
    <div className={classes.wrapper}>
      <p onClick={() => setActiveClass('all')} className={allTodosClasses}>
        All
      </p>
      <p
        onClick={() => setActiveClass('active')}
        className={activeTodosClasses}
      >
        Active
      </p>
      <p
        onClick={() => setActiveClass('completed')}
        className={completedTodosClasses}
      >
        Completed
      </p>
    </div>
  );
};

export default SwitchTodos;
