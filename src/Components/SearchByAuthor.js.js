import React, { useState } from "react";

const SearchByAuthor = ({ onSearch }) => {
  const [authorName, setAuthorName] = useState("");

  const handleSearch = () => {
    onSearch(authorName);
  };

  return (
    <div className="search-by-author">
      <input
        type="text"
        placeholder="Enter author's name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <button onClick={handleSearch}>Search by Author</button>
    </div>
  );
};

export default SearchByAuthor;
