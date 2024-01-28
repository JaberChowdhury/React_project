import Hero from "@/components/Hero";
import Code from "@/components/Code";
import packages from "@/constant/packages";
import Useful from "@/components/Useful";
export default function App() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col relative">
      <Hero />
      <Useful />
      <div className="card rounded p-4 w-[390px] md:w-full">
        <h2 className="card-title">Dependency of this project</h2>
        <Code hl={[3, 10, 14, 24]} code={packages} />
      </div>
    </div>
  );
}
