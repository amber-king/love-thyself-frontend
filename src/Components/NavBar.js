import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({ tag, onTagChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <nav>
      <Link to="/" className="nav-link-btn">
        Home
      </Link>

      <Link to="/api/quotes" className="nav-link-btn">
        All Quotes
      </Link>
    </nav>
  );
}
