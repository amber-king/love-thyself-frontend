// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar"; // Update the import statement for NavBar
import Home from "./Pages/Home";
import AllQuotes from "./Components/AllQuotes";
import TagQuote from "./Components/TagQuote";
import SearchEngine from "./Components/SearchEngine";

function App() {
  const [tag, setTag] = useState("");

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };
  return (
    <div className="App">
      <Router>
        <NavBar tag={tag} onTagChange={handleTagChange} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/api/quotes" element={<AllQuotes />} exact />

          <Route path="/api/quotes/:tag" element={<TagQuote />} exact />
        </Routes>
        <SearchEngine />
      </Router>
    </div>
  );
}

export default App;
