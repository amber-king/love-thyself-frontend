import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";

import Happiness from "./Components/Happiness";

import Today from "./Components/Today";
import Truth from "./Components/Truth";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/topic/happiness" element={<Happiness />} exact />

          <Route path="/topic/today" element={<Today />} exact />
          <Route path="/topic/truth" element={<Truth />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
