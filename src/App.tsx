/*
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
*/
import "@fontsource/roboto/700.css";
import { Routes, Route } from "react-router-dom";
import Div from "./components/Div";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search";
import TodoApp from "./pages/TodoApp";
import TextUtils from "./pages/TextUtils";
import Counter from "./pages/Counter";
import Overview from "./pages/Overview";
import TextUtilsStore from "./Hooks/TextUtilsStore";

export default function App() {
  const { state, dispatch } = TextUtilsStore();

  return (
    <Div className="w-full min-h-screen flex justify-center items-center flex-col relative p-2 bg-slate-200">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route
          path="/TextUtils"
          element={<TextUtils state={state} dispatch={dispatch} />}
        />
        <Route path="/Counter" element={<Counter />} />
        <Route
          path="/TextUtils/Overview"
          element={<Overview state={state} />}
        />
      </Routes>
    </Div>
  );
}
