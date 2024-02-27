import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";


export default function App() {
  return (
    <section className="container">
    <Navbar />
    <main className="pt-4">
      <Outlet />
    </main>
    </section>
  );
}
