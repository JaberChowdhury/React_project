// src/pages/_app.tsx

import { Outlet } from "react-router-dom";
import { Modals } from "@generouted/react-router";
import { Button } from "@/components/ui/button";
import { useModals } from "../router";

export default function App() {
  const modals = useModals();

  return (
    <section>
      <header>
        <nav>navigation</nav>
        <Button onClick={() => modals.open("/info")}>Open modal</Button>
        <Button onClick={() => modals.close()}>close modal</Button>
      </header>

      <main>
        <Outlet />
      </main>

      <Modals />
    </section>
  );
}
