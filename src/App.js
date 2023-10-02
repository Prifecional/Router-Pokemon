import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../src/components/Navigation";
import Home from "./components/Home";
import Charmander from "./components/Charmander";
import Squirtle from "./components/Bulbassauro";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/squirtle" element={<Squirtle />} />
          <Route path="/charmander" element={<Charmander />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
