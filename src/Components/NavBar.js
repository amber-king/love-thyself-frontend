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
      <Link to="/tag-categories" className="tag-link-btn">
        Tag Categories 🏷️
      </Link>
    </nav>
  );
}
