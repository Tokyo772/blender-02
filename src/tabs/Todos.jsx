import { Text, Form, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = text => {
    setTodos(prevState => {
      console.log(todos);
      return [...prevState, { text, id: nanoid() }];
    });
  };

  const delTodos = (id) => {
    setTodos((prevState) => {
      return prevState.filter((el)=>)
    })
  }
  return (
    <>
      <Form onSubmit={addTodos} />

      <TodoList todos={todos} />

      {todos.length === 0 && (
        <Text textAlign="center"> There are no any todos ...</Text>
      )}
    </>
  );
};
