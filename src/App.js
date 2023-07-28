
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Quotes from "./Components/QuotePage";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topic/:topic" element={<Quotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
