import type { Todo } from '../types';

export const getTodos = async () => {
  const URL = 'https://jsonplaceholder.typicode.com/todos/';
  let data: Todo[] = [];
  try {
    const response = await fetch(URL);
    data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (id: number | string) => {
  const URL = `https://jsonplaceholder.typicode.com/todos/${id}`;
  let data: Todo = {} as Todo;
  try {
    const response = await fetch(URL);
    data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
