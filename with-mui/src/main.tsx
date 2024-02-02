import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";
// import { Routes } from "@generouted/react-router";
import { Routes } from "@generouted/react-router/lazy"; // route-based code-splitting

createRoot(document.getElementById("root")!).render(<Routes />);
