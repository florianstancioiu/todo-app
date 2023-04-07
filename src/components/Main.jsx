import { useEffect, useRef } from 'react';
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
  const filterTodos = useSelector((state) => state.todos.filterTodos);
  const dragItem = useRef();
  const dragOverItem = useRef();

  useEffect(() => {
    fetch('todos.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(todosActions.setTodos({ todos: data.todos }));
      });
  }, []);

  const dragStartHandler = (event, index) => {
    dragItem.current = index;
  };

  const dragEnterHandler = (event, index) => {
    dragOverItem.current = index;
  };

  const dropHandler = (event) => {
    dispatch(
      todosActions.switchTodos({
        dragItemId: dragItem.current,
        dragOverItemId: dragOverItem.current,
      })
    );

    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <main className={classes.main}>
      <AddTodo />
      <div className={classes['todos-wrapper']}>
        <div className={classes.todos}>
          {filterTodos === 'all' &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                complete={todo.completed}
                dragStartHandler={dragStartHandler}
                dragEnterHandler={dragEnterHandler}
                dropHandler={dropHandler}
              />
            ))}
          {filterTodos === 'active' &&
            todos.map((todo) => {
              if (!todo.completed) {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    complete={todo.completed}
                    dragStartHandler={dragStartHandler}
                    dragEnterHandler={dragEnterHandler}
                    dropHandler={dropHandler}
                  />
                );
              }
            })}
          {filterTodos === 'completed' &&
            todos.map((todo) => {
              if (todo.completed) {
                return (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    complete={todo.completed}
                    dragStartHandler={dragStartHandler}
                    dragEnterHandler={dragEnterHandler}
                    dropHandler={dropHandler}
                  />
                );
              }
            })}
        </div>
        <TodoNumber />
      </div>
      <SwitchTodos />
      <ReorderMessage />
    </main>
  );
};

export default Main;
