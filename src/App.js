import "./App.css";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getApplications } from "./actions";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Career from "./career";
import About from "./about";
import Service from "./services";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/careers" element={<Career />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/services" element={<Service />}></Route>
    </Routes>
  );
}

export default App;
