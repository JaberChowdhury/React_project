import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProgressBar from "@badrap/bar-of-progress";
import { useNavigation } from "react-router-dom";

export default function App() {
  const progress = new ProgressBar({
    size: 2,
    color: "#29e",
    delay: 1,
  });

  const { state } = useNavigation();
  console.log(useNavigation());

  if (state === "idle") {
    progress.start();
  }

  if (state !== "loading") {
    setTimeout(() => {
      progress.finish();
    }, 500);
  }

  return (
    <section>
      <Navbar />
      <main className="w-full min-h-screen flex items-center flex-col relative  px-2">
        <Outlet />
      </main>
    </section>
  );
}
