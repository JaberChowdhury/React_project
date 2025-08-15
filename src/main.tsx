import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import LocalStorageWrapper from "./components/LocalStorageWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalStorageWrapper>
      <App />
    </LocalStorageWrapper>
  </React.StrictMode>
);
