import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/AboutPage";
import AllQuotes from "./Components/AllQuotes";

import AuthorQuotes from "./Components/AuthorQuotes";
import AuthorPage from "./Pages/AuthorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <NavBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/author/:authorSlug" element={<AuthorQuotes />} />

              <Route path="/api/quotes" element={<AllQuotes />} />
              <Route path="/api/authors" element={<AuthorPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
