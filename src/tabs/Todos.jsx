import { Text, Form, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const TODOS = 'todos';
const getLocalData = () => {
  // const initialState = localStorage.getItem(TODOS);
  // return initialState !== null ? JSON.parse(initialState) : [];
  return JSON.parse(localStorage.getItem(TODOS)) || [];
};

export const Todos = () => {
  const [todos, setTodos] = useState(getLocalData);

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodos = text => {
    setTodos(prevState => {
      console.log(todos);
      return [...prevState, { text, id: nanoid() }];
    });
  };

  const delTodos = id => {
    setTodos(prevState => {
      return prevState.filter(el => el.id !== id);
    });
  };
  return (
    <>
      <Form onSubmit={addTodos} />

      <TodoList todos={todos} delTodos={delTodos} />

      {todos.length === 0 && (
        <Text textAlign="center"> There are no any todos ...</Text>
      )}
    </>
  );
};
