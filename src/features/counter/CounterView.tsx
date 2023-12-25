import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Paper, Button } from "@mui/material";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
  incrementCounterByAmount,
} from "./counterSlice";
import { Add, DoDisturbAlt, Remove } from "@mui/icons-material";
import { green, red, blue } from "@mui/material/colors";

interface stateType {
  counter: { count: number };
}

export const everythingInCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
};

const CounterView = () => {
  const { count } = useSelector((state: stateType) => state.counter);
  const dispatch = useDispatch();

  return (
    <Paper
      elevation={1}
      sx={{
        ...everythingInCenter,
        width: "100%",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      <Container
        sx={{
          everythingInCenter,
          flexDirection: "row",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{ ...everythingInCenter, flexDirection: "row", width: "100%" }}
        >
          <Typography variant="h6">Count: </Typography>
          <Typography variant="h6">{count}</Typography>
        </Typography>
        <Container
          sx={{
            ...everythingInCenter,
            width: "100%",
            flexDirection: "row",
            gap: "2px",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        >
          <Button
            onClick={() => {
              dispatch(incrementCounter());
            }}
            variant="contained"
            sx={{
              backgroundColor: green[800],
            }}
          >
            <Add />
          </Button>
          <Button
            onClick={() => {
              dispatch(decrementCounter());
            }}
            variant="contained"
            sx={{
              backgroundColor: red[800],
            }}
          >
            <Remove />
          </Button>
          <Button
            onClick={() => {
              dispatch(resetCounter());
            }}
            variant="contained"
            sx={{
              backgroundColor: blue[800],
            }}
          >
            <DoDisturbAlt />
          </Button>
          <Button
            onClick={() => {
              dispatch(incrementCounterByAmount(5));
            }}
            variant="contained"
            sx={{
              backgroundColor: green[800],
            }}
          >
            <Add /> 5
          </Button>
        </Container>
      </Container>
    </Paper>
  );
};

export default CounterView;
