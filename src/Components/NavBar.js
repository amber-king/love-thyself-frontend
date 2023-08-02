import React from "react";

export default function NavBar({ tag, onTagChange }) {
  const handleSubmit = (event) => {
    event.preventDafault();
  };
  return (
    <nav>
      <form onSubmit={handleSubmit}>
        <input type="text" value={tag} onChange={onTagChange} />
        <button type="submit">Enter</button>
      </form>
    </nav>
  );
}
