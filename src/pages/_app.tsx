import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <section>
      <Navbar />
      <main className="w-full min-h-screen flex items-center flex-col relative  px-2">
        <Outlet />
      </main>
    </section>
  );
}
