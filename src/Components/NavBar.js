import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link-btn">
        Home🏠
      </Link>
      <Link to="/api/quotes" className="nav-link-btn">
        All Quotes❝❞
      </Link>
      <Link to="/api/authors" className="authors-btn">
        All Authors 🏷️
      </Link>
    </nav>
  );
}
