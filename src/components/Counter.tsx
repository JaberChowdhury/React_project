import Button from "./Button";
import CounterStore from "../Hooks/CounterStore";
import { AddCircle, DataUsage, LinearScale } from "@mui/icons-material";

export function Counter() {
  const { state, dispatch } = CounterStore();
  return (
    <div className="w-4/5 p-2 rounded bg-slate-200 border border-slate-900 shadow-md flex flex-col relative">
      <strong>Counter</strong>
      <div className="w-full bg-slate-400 py-1 flex rounded justify-between px-2 items-center">
        <strong className="text-2xl">{state.count}</strong>
        <div className="flex justify-center items-center gap-2">
          <Button
            handleClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
            className="bg-green-400 text-2xl"
            type="button"
          >
            <AddCircle />
          </Button>
          <Button
            handleClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
            className="bg-red-400 text-2xl"
            type="button"
          >
            <LinearScale />
          </Button>
          <Button
            handleClick={() => {
              dispatch({ type: "RESET" });
            }}
            className="bg-blue-400 text-2xl"
            type="button"
          >
            <DataUsage />
          </Button>
        </div>
      </div>
    </div>
  );
}
