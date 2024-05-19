import { Card } from "@/components/ui/card";
import useColor from "@/hooks/useColor";

const Element = ({ d }) => {
  if (d.name) {
    return (
      <Card
        className={`size-40 ${useColor(d.number)} p-3 flex justify-around items-center flex-col relative`}
      >
        <div className="w-full flex justify-between items-center">
          <div className="bg-[#201B09] text-[#EDE0CB] size-10 rounded-full flex justify-center items-center font-bold">
            {d.number}
          </div>
          <div className="font-bold">{d.atomic_mass?.toFixed(4)}</div>
        </div>
        <div className="text-5xl font-bold">{d.symbol}</div>
        <div className="my-2 font-medium">{d.name}</div>
      </Card>
    );
  } else {
    return <div className="size-40 p-3"></div>;
  }
};

export default Element;
