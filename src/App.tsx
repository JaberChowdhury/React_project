import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container
      style={{
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <RouterProvider router={router} />
    </Container>
  );
};

export default App;
