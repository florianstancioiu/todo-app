import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import classes from './AddTodo.module.css';
import IconCheck from '../images/icon-check.svg';
import { todosActions } from '../store/todos';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(
        todosActions.addTodo({
          todo: {
            id: uuidv4(),
            title,
            completed: isComplete,
          },
        })
      );
      setTitle('');
      setIsComplete(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      {!isComplete && (
        <div
          onClick={() => setIsComplete(true)}
          className={classes.circle}
        ></div>
      )}
      {isComplete && (
        <div
          onClick={() => setIsComplete(false)}
          className={classes['fully-complete']}
        >
          <img className={classes['check-icon']} src={IconCheck} alt='' />
        </div>
      )}
      <input
        type='text'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyDown={handleKeyDown}
        className={classes.input}
        placeholder='Create a new todo'
      />
    </div>
  );
};

export default AddTodo;
