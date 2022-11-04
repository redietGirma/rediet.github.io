import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./home/LandingPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
