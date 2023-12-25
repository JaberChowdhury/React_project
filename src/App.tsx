import { Routes, Route } from "react-router-dom";
import { Home, Colors } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/colors" element={<Colors />} />
    </Routes>
  );
};

export default App;
