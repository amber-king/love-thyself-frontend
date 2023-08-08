import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import AllQuotes from "./Components/AllQuotes";
import SearchByAuthor from "./Components/SearchByAuthor.js";
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
              <Route path="/author/:authorName" element={<AuthorQuotes />} />
              <Route path="/search/author" element={<SearchByAuthor />} />
              <Route path="/api/quotes" element={<AllQuotes />} />
              <Route path="/api/authors" element={<AuthorPage />} />
              <Route path="/all-quotes" element={<AllQuotes />} />{" "}
              {/* Add this line for the AllQuotes page */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
