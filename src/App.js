import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Confidence from "./Components/Confidence";
import Happiness from "./Components/Happiness";
import Inspiration from "./Components/Inspiration";
import Today from "./Components/Today";
import Truth from "./Components/Truth";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/quotes/confidence" element={<Confidence />} />
          <Route path="/api/quotes/happiness" element={<Happiness />} />
          <Route path="/api/quotes/inspiration" element={<Inspiration />} />
          <Route path="/api/quotes/today" element={<Today />} />
          <Route path="/api/quotes/truth" element={<Truth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
