// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar"; // Update the import statement for NavBar
import Home from "./Pages/Home";
import AllQuotes from "./Components/AllQuotes";
import TagQuote from "./Components/TagQuote";
import SearchEngine from "./Components/SearchEngine";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <NavBar />
          <SearchEngine />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/api/quotes" element={<AllQuotes />} exact />

          <Route path="/api/quotes/:tag" element={<TagQuote />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
