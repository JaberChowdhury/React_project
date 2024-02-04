// src/pages/_app.tsx

import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

// mui components
// import { Container } from "@mui/material";

export default function App() {
  return (
    <>
      <CssBaseline />
      <main className="bg-pattern">
        <Outlet />
      </main>
    </>
  );
}
