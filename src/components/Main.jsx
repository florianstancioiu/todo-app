import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Main.module.css';
import AddTodo from './AddTodo';
import Todo from './Todo';
import TodoNumber from './TodoNumber';
import SwitchTodos from './SwitchTodos';
import ReorderMessage from './ReorderMessage';
import { todosActions } from '../store/todos';

const Main = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    fetch('./todos.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(todosActions.setTodos({ todos: data.todos }));
      });
  }, []);

  return (
    <main className={classes.main}>
      <AddTodo />
      <div className={classes['todos-wrapper']}>
        <div className={classes.todos}>
          {todos.map((todo) => (
            <Todo key={todo.id} title={todo.title} complete={todo.completed} />
          ))}
        </div>
        <TodoNumber />
      </div>
      <SwitchTodos />
      <ReorderMessage />
    </main>
  );
};

export default Main;
