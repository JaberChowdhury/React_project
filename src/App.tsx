import useData from "@/hooks/useData";
import Element from "@/components/Element";

const App = () => {
  const data = useData(true);

  const allData = useData(false);

  return (
    <div className="w-full p-2 min-h-screen relative">
      <div
        className="w-full gap-2"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto repeat(16, 1fr)",
        }}
      >
        {data.map((d, i) => {
          return <Element d={d} key={i} />;
        })}
      </div>

      <div className="w-full my-6 gap-y-2 grid relative ">
        <div className="w-full flex gap-2 items-center">
          {allData.slice(92, 107).map((d, i) => {
            return <Element d={d} key={i} />;
          })}
        </div>

        <div className="w-full flex gap-2 items-center">
          {allData.slice(124, 139).map((d, i) => {
            return <Element d={d} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
