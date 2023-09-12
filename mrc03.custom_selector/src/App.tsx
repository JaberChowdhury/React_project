/*
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
*/
import "@fontsource/roboto/700.css";
import { Options } from "./components/Options";

export default function App() {
  const data = [
    { label: "first", value: 1 },
    { label: "second", value: 2 },
    { label: "third", value: 3 },
    { label: "fourth", value: 4 },
  ];

  return (
    <div className="w-full bg-cyan-100 min-h-screen flex justify-center items-center flex-col relative p-2">
      <Options data={data} />
    </div>
  );
}
