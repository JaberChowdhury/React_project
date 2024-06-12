import { useTodosIds } from "../services/queries";
import { Typography, Stack } from "@mui/material";

const Todos = () => {
  const todosIdsQuery = useTodosIds();

  console.log(todosIdsQuery);
  return (
    <>
      <Typography variant="h3">Todos ids</Typography>
      <Stack>
        {todosIdsQuery.data?.map((id) => (
          <Typography key={id}>{id}</Typography>
        ))}
      </Stack>
    </>
  );
};

export default Todos;
