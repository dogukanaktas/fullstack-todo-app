import type { NextPage } from 'next';
import type { Todo } from '../types';
import Link from 'next/link';
import { getTodos } from '../lib/getData';

const Home: NextPage<{ todos: Todo[] }> = (props) => {
  return (
    <div>
      <ol>
        {props.todos.map((item) => (
          <li key={item.id}>
            <Link href={`/todos/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ol>
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
