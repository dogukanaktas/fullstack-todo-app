import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:8000/todos';

interface Todo {
  _id: string;
  todo: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Home: NextPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch(URL);
        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };

    getTodos();
  }, []);

  return (
    <div>
      <ol>
        {todos.map((item) => (
          <li key={item._id}>{item.todo}</li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
