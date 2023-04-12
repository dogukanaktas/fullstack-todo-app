import type { NextPage } from 'next';
import type { Todo } from '../types';
import Link from 'next/link';
import { deleteAllTodos, deleteTodo, getTodos } from '../lib/getData';

const Home: NextPage<{ todos: Todo[] }> = (props) => {
  return (
    <div>
      <ol>
        {props.todos.map((item, idx) => (
          <p key={item._id} className="todo-row">
            <span>{idx}</span>
            <span>{item._id}</span>
            <Link href={`/todos/${item._id}`}>{item.title}</Link>
            <span>{item.completed ? 'completed' : 'not completed'}</span>
            <button onClick={() => deleteTodo(item._id)}>-</button>
          </p>
        ))}
      </ol>

      <button onClick={deleteAllTodos}>DELETE ALL</button>
    </div>
  );
};

export const getStaticProps = async () => {
  const todos = (await getTodos()) || [];
  return {
    props: {
      todos,
    },
  };
};

export default Home;
