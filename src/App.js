import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import AllQuotes from "./Components/AllQuotes";
import TagQuote from "./Components/TagQuote";
import TagsPage from "./Components/TagsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <NavBar />
          <Routes>
            <Route path="/" element={<TagsPage />} />
            <Route path="/tag/:tagSlug" element={<TagQuote />} />
          </Routes>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/quotes" element={<AllQuotes />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
