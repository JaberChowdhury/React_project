import themeData from "@/constant/themeData";
import Gradienttext from "@/components/Gradienttext";
import $theme from "@/stores/theme";
import { useStore } from "@nanostores/react";
import { cn } from "@/lib/utils";

interface propsType {
  className?: string;
}

const Themelist = ({ className }: propsType) => {
  const theme = useStore($theme);

  return (
    <div
      className={cn(
        "flex justify-between items-center flex-wrap relative",
        className,
      )}
    >
      {themeData.map((tag) => (
        <div
          key={tag}
          onClick={() => $theme.set(tag)}
          className="w-20 m-2 first-letter:uppercase"
        >
          {tag === theme ? (
            <Gradienttext className="uppercase font-bold" text={tag} />
          ) : (
            tag
          )}
        </div>
      ))}
    </div>
  );
};

export default Themelist;
