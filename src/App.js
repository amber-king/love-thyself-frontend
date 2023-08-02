import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import AllQuotes from "./Components/AllQuotes";
import TagQuote from "./Components/TagQuote";
// import SearchEngine from "./Components/SearchEngine"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/api/quotes" element={<AllQuotes />} exact />

          <Route path="/api/quotes/:tag" element={<TagQuote />} exact />
          {/* <Route path="/" element={<SearchEngine/>}/> */}
        </Routes>
        {/* <SearchEngine /> */}
      </Router>
    </div>
  );
}

export default App;
