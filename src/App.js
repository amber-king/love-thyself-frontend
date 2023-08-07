import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import AllQuotes from "./Components/AllQuotes";
import TagQuote from "./Components/TagQuote";
import TagPage from "./Components/TagsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <NavBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tag-categories" element={<TagPage />} />
              <Route path="/tag/:tagSlug" element={<TagQuote />} />
              <Route path="/api/quotes" element={<AllQuotes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
