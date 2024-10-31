// src/pages/_app.tsx
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  );
}
