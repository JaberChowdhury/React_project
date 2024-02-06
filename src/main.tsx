import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createRoot } from "react-dom/client";
// import { Routes } from "@generouted/react-router";
import { Routes } from "@generouted/react-router/lazy"; // route-based code-splitting
import { Provider } from "react-redux";
import store from "@/app/store";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Routes />
  </Provider>,
);
