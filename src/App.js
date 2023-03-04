import "./App.css";
import Home from "./components/home/Home";
import Result from "./components/result/Result";
import { Routes, Route } from "react-router-dom";
// import { PATHS } from "./paths";

export const centeredStyle = {
  width: "100vw",
  height: "100vh",
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "center",
  background: "black",
};

function App() {
  return (
    <div className="App" style={centeredStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/weather" element={<Result />} /> */}
        <Route path="weather/:result" element={<Result />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
