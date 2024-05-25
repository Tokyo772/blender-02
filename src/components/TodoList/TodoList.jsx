import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, delTodos }) => {
  return (
    <Grid>
      {todos.map((item, count) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          text={item.text}
          count={count}
          delTodos={delTodos}
        />
      ))}
    </Grid>
  );
};
