import React from "react";
import { Link } from "react-router-dom";

// all navigation links -buttons for user interaction to each page
export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="nav-link-btn">
        Home🏠
      </Link>
      <Link to="/api/quotes" className="nav-link-btn">
        All Quotes❝❞
      </Link>
      <Link to="/api/authors" className="authors-btn">
        All Authors 🏷️
      </Link>
      <Link to="/about" className="abt-link-btn">
        About & More...ℹ
      </Link>
    </nav>
  );
}
