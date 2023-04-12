import type { NextPage } from 'next';
import type { Todo } from '../../types';
import { getTodo, getTodos } from '../../lib/getData';

const Todos: NextPage<{ todo: Todo }> = ({ todo }) => {
  return (
    <div>
      <p>{todo._id}</p>
      <p>{todo.completed ? 'completed' : 'not completed'}</p>
      <p>{todo.title}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const todos = (await getTodos()) || [];
  const paths = todos.map(({ _id }) => ({ params: { id: _id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const {
    params: { id },
  } = context;

  const todo = (await getTodo(id)) || {};

  return {
    props: {
      todo,
    },
  };
};

export default Todos;
