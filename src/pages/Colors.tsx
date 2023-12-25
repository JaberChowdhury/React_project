import { useSelector } from "react-redux";
import { getColors } from "../features/colors/colorsSlice";
import { Colorblock } from "../components";

const Colors = () => {
  const data = useSelector(getColors);
  return (
    <div>
      <b>Colors</b>

      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
          gridAutoFlow: "dense",
          justifyContent: "center",
          alignItems: "center",
          gap: "2px",
        }}
        className="justify-center p-1 items-center relative"
      >
        {data.map((color: string, id: number) => {
          const size = [
            { gridColumn: " span 4", gridRow: "span 4" },
            { gridRow: "span 6" },
            { gridColumn: "span 2" },
          ][Math.floor(Math.random() * 3)];
          return <Colorblock id={id} size={size} color={color} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Colors;
