import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Container } from "@mui/material";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryaclient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryaclient}>
      <Container>
        <App />
      </Container>
    </QueryClientProvider>
  </React.StrictMode>,
);
