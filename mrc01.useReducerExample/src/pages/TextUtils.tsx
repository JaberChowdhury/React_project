import Button from "../components/Button";
import { Link } from "react-router-dom";
// import TextUtilsStore from "../Hooks/TextUtilsStore";
import TextUtilsWorker from "../Hooks/TextUtilsWorker";
import { Send } from "@mui/icons-material";

interface actionDataType {
  type:
    | "ONLYSTRING"
    | "ONLYNUMBERS"
    | "TEXTAREAVALUE"
    | "MAKEARRAY"
    | "CLEAR"
    | "REMOVESPACE"
    | "UPPERCASE"
    | "LOWERCASE"
    | "RANDOM"
    | "REVERSEARRAY"
    | "MAKEDOUBLE"
    | "REVERSESTRING"
    | "UNIQUESTRING";

  color: boolean | string;
  title: string;
}

export default function TextUtils(props: any) {
  // const { state, dispatch } = TextUtilsStore();
  const { state, dispatch } = props;
  const worker = new TextUtilsWorker(state.value);

  const dashboard = [
    { title: "Length", count: state.value.length },
    { title: "String", count: worker.onlyString().length },
    { title: "Numbers", count: worker.onlyNumbers().length },
  ];
  const actionData: actionDataType[] = [
    { type: "MAKEARRAY", color: "bg-slate-400", title: "Array" },
    { type: "CLEAR", color: "bg-red-400", title: "Clear" },
    { type: "REVERSEARRAY", color: "bg-slate-400", title: "Reverse [ ]" },
    { type: "REMOVESPACE", color: "bg-slate-400", title: "rm space" },
    { type: "ONLYNUMBERS", color: "bg-slate-400", title: "Numbers" },
    { type: "ONLYSTRING", color: "bg-slate-400", title: "String" },
    { type: "UPPERCASE", color: "bg-slate-400", title: "Uppercase" },
    { type: "LOWERCASE", color: "bg-slate-400", title: "Lowercase" },
    { type: "RANDOM", color: "bg-slate-400", title: "Random" },
    { type: "MAKEDOUBLE", color: "bg-slate-400", title: "2x" },
    { type: "REVERSESTRING", color: "bg-slate-400", title: "Reverse" },
    { type: "UNIQUESTRING", color: "bg-slate-400", title: "Unique" },
  ];
  return (
    <div className="w-full min-h-screen flex items-center flex-col">
      <div className="w-4/5 h-[250px] bg-slate-300 my-2 rounded shadow-md min-h-[200px] max-h-[200px] flex justify-center items-center flex-col">
        <textarea
          onChange={(e) =>
            dispatch({
              type: "TEXTAREAVALUE",
              payload: { text: e.target.value },
            })
          }
          className="w-full h-full p-2 rounded"
          value={state.value}
          placeholder="Type something here..."
        />
        <div className="w-full flex justify-between items-center relative px-2 my-2">
          {dashboard?.map((item, index) => {
            return (
              <div key={index} className="flex">
                <p className="font-medium">{item.title}:</p>
                <b>{item.count}</b>
              </div>
            );
          })}
        </div>
      </div>
      <Link
        className={`${
          state.value.length !== 0 ? "" : "hidden"
        } w-4/5 flex justify-between items-center relative my-2 bg-slate-400 p-2 rounded shadow-md text-xs`}
        to="/TextUtils/Overview"
      >
        <b>See more about your input</b>
        <Send />
      </Link>
      <div className="w-4/5 mt-2 grid grid-cols-3 gap-2 justify-center items-center">
        {actionData?.map((data, index) => {
          return (
            <Button
              key={index}
              handleClick={() => dispatch({ type: data.type })}
              className={`text-[16px] ${data.color ? data.color : ""}`}
            >
              {data.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
