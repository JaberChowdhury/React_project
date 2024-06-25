import { useTodos } from "../services/queries";
import { Typography, Stack, Card, CardContent, Button } from "@mui/material";

const Todos = () => {
  const todosQuery = useTodos();
  if (todosQuery.isLoading) {
    return <Typography> Loading..... </Typography>;
  }
  if (todosQuery.error) {
    return <Typography> Failed to fetch data </Typography>;
  }
  return (
    <div>
      <Typography variant="h3">Todos</Typography>
      <Stack spacing={2}>
        {todosQuery.data?.map((todo) => (
          <Card key={todo.id}>
            <CardContent
            /* style={{
            background: "linear-gradient(45deg, rgba(255,255,255,0.9), rgba(00,00,00,0.9))",
            backdropFilter: "blur(10px)"
          }}*/
            >
              <Typography variant="h6">Title : {todo.title}</Typography>
              <Typography variant="caption">ID : {todo.id}</Typography>
              <Typography variant="subtitle2">
                Description : {todo.description}
              </Typography>
              <Typography variant="subtitle2">
                isChecked : {todo.checked === true ? "True" : "False"}
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
        ))}
      </Stack>
    </div>
  );
};

export default Todos;
