import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./home/LandingPage";
import Details from "./components/Details/Details";
import Porfolio from "./components/Porfolio/Portfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Details" element={<Details />}></Route>
        <Route path="/Porfolio" element={<Porfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
