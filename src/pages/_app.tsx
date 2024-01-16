// src/pages/_app.tsx

import { Outlet } from "react-router-dom";
import { Modals } from "@generouted/react-router";

import { useModals } from "../router";

export default function App() {
  const modals = useModals();

  return (
    <section>
      <header>
        <nav>navigation</nav>
        <button onClick={() => modals.open("/info")}>Open modal</button>
        <button onClick={() => modals.close()}>close modal</button>
      </header>

      <main>
        <Outlet />
      </main>

      <Modals />
    </section>
  );
}
