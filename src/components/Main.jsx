import classes from './Main.module.css';
import AddTodo from './AddTodo';
import Todo from './Todo';
import TodoNumber from './TodoNumber';
import SwitchTodos from './SwitchTodos';
import ReorderMessage from './ReorderMessage';

const todos = [
  {
    id: 1,
    title: 'Complete online JavaScript course',
    completed: true,
  },
  {
    id: 2,
    title: 'Jog around the park 3x',
    completed: false,
  },
  {
    id: 3,
    title: '10 minutes meditation',
    completed: false,
  },
  {
    id: 4,
    title: 'Read for 1 hour',
    completed: false,
  },
  {
    id: 5,
    title: 'Pick up groceries',
    completed: false,
  },
  {
    id: 6,
    title: 'Complete Todo App on Frontend Mentor',
    completed: false,
  },
];

const Main = () => {
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
