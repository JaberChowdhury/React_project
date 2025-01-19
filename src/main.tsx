import { StrictMode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Container } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container
      sx={{
        width: "100vh",
        minHeight:"100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <App />
    </Container>
  </StrictMode>
);
