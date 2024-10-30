// src/pages/_app.tsx

import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <section>
      <header>
        <nav>Navbar</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
