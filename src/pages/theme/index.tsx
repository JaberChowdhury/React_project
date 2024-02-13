import Themelist from "@/components/Themelist";
import Gradienttext from "@/components/Gradienttext";

const Theme = () => {
  return (
    <div className="w-full px-4 min-h-screen flex justify-center items-center flex-col relative">
      <div className="w-full my-2">
        <Gradienttext className="text-6xl font-bold" text="Themes" />
      </div>

      <Themelist className="w-full gap-2 grid grid-cols-3 md:grid-cols-5" />
    </div>
  );
};

export default Theme;
