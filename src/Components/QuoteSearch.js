import React, { useState } from "react";

// this function handles the search engine functionality - imported on all quotes js file where it displays"
const QuoteSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <center>
      <div className="quote-search">
        <input
          type="text"
          placeholder="Search for quotes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </center>
  );
};

export default QuoteSearch;
