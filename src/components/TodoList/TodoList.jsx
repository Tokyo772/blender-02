import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((item, count) => (
        <TodoListItem key={item.id} text={item.text} count={count} />
      ))}
    </Grid>
  );
};
