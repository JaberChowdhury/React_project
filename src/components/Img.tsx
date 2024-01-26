import { cn } from "@/lib/utils";

type propsType = {
  src: string;
  className?: string;
};

const Img = ({ src, className }: propsType) => {
  return (
    <img
      id="fade-up"
      className={cn("relative w-full h-full", className)}
      src={src}
      alt="An aesthetic image ⚡️"
      loading="lazy"
    />
  );
};

export default Img;
