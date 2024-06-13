import { useTodo, useTodos } from "../services/queries";
import { Typography, Stack, Card, CardContent, Button } from "@mui/material";
// import { Todo } from "../types/Todo"

const Todos = () => {
  const todosQuery = useTodos();
  const ids = todosQuery.data?.map((todo) => todo.id);
  const todoQuery = useTodo(ids);

  // console.log({todoQuery})
  return (
    <div>
      <Typography variant="h3">Todos</Typography>
      <Stack spacing={2}>
        {(todoQuery || []).map((todo) => {
          return (
            <Card key={todo.data?.id}>
              <CardContent
              /* style={{
            background: "linear-gradient(45deg, rgba(255,255,255,0.9), rgba(00,00,00,0.9))",
            backdropFilter: "blur(10px)"
          }}*/
              >
                <Typography variant="h6">Title : {todo.data?.title}</Typography>
                <Typography variant="caption">ID : {todo.data?.id}</Typography>
                <Typography variant="subtitle2">
                  Description : {todo.data?.description}
                </Typography>
                <Typography variant="subtitle2">
                  isChecked : {todo.data?.checked === true ? "True" : "False"}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  spacing={0.5}
                >
                  <Button
                    sx={{ width: "100%" }}
                    variant="contained"
                    color="success"
                  >
                    Edit
                  </Button>
                  <Button variant="contained" color="error">
                    Delete
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </div>
  );
};

export default Todos;
