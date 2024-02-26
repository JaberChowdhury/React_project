import "./index.css";
import Provider from "@/components/provider";

import { createRoot } from "react-dom/client";
// import { Routes } from "@generouted/react-router";
import { Routes } from "@generouted/react-router/lazy"; // route-based code-splitting

createRoot(document.getElementById("root")!).render(
  <Provider>
    <Routes />
  </Provider>,
);
