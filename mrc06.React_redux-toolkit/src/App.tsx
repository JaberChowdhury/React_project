import "@fontsource/roboto/700.css";
import {
  Container,
  Typography,
  Alert,
  AlertTitle,
  CssBaseline,
} from "@mui/material";
import CounterView from "./features/counter/CounterView";
import { everythingInCenter } from "./features/counter/CounterView";

const App = () => {
  return (
    <Container sx={everythingInCenter}>
      <CssBaseline enableColorScheme />
      <Alert
        elevation={1}
        sx={{ width: "90%", marginTop: "5px", marginBottom: "5px" }}
        severity="error"
      >
        <AlertTitle>Error</AlertTitle>
        <Typography variant="caption">
          This is an error alert — check it out!
        </Typography>
      </Alert>
      <Alert
        elevation={1}
        sx={{ width: "90%", marginTop: "5px", marginBottom: "5px" }}
        severity="warning"
      >
        <AlertTitle>warning</AlertTitle>
        <Typography variant="caption">
          This is a warning alert — check it out!
        </Typography>
      </Alert>
      <Alert
        elevation={1}
        sx={{ width: "90%", marginTop: "5px", marginBottom: "5px" }}
        severity="info"
      >
        <AlertTitle>info</AlertTitle>
        <Typography variant="caption">
          This is an info alert — check it out!
        </Typography>
      </Alert>
      <Alert
        elevation={1}
        sx={{ width: "90%", marginTop: "5px", marginBottom: "5px" }}
        severity="success"
      >
        <AlertTitle>success</AlertTitle>
        <Typography variant="caption">
          This is a success alert — check it out!
        </Typography>
      </Alert>
      <CounterView />
      <CounterView />
    </Container>
  );
};

export default App;
