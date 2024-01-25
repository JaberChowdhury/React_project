import Hero from "@/components/Hero";
import Code from "@/components/Code";
import packages from "@/constant/packages";

export default function App() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col relative">
      <Hero />
      <div className="card w-[430px]">
        <div className="card-body">
          <h2 className="card-title">Dependency of this project</h2>
          <Code hl={[18, 3, 23]} code={packages} />
        </div>
      </div>
    </div>
  );
}
