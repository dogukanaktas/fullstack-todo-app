import type { Todo } from '../types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getTodos = async () => {
  const URL = `${BASE_URL}/todos/`;
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
  const URL = `${BASE_URL}/todos/${id}`;
  let data: Todo = {} as Todo;
  try {
    const response = await fetch(URL);
    data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllTodos = async () => {
  const URL = `${BASE_URL}/todos/`;
  let data: Todo = {} as Todo;
  try {
    const response = await fetch(URL, {
      method: 'DELETE',
    });
    data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: number | string) => {
  const URL = `${BASE_URL}/todos/${id}`;
  console.log(BASE_URL);
  let data: Todo = {} as Todo;
  try {
    const response = await fetch(URL, {
      method: 'DELETE',
    });
    console.log('response', response);

    return data;
  } catch (error) {
    console.log(error);
  }
};
