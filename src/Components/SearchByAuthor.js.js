import React from "react";
import { Link } from "react-router-dom";

const SearchByAuthor = () => {
  return (
    <div className="search-by-author">
      <h2>Search by Author</h2>
      <Link to="/all-authors" className="nav-link-btn">
        All Authors
      </Link>
    </div>
  );
};

export default SearchByAuthor;

