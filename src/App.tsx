import { Routes, Route } from "react-router-dom";
import "./assets/style.scss";
import HomePage from "./pages";
import Tabs from "./pages/tabs";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs/:id" element={<Tabs />} />
      </Routes>
    </div>
  );
}

export default App;
