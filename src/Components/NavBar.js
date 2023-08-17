import React from "react";
import { Link } from "react-router-dom";

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
