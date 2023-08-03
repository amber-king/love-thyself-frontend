import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchEngine() {
  const [tag, setTag] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/api/quotes/${tag}`);
  };

  return (
    <div className="search-engine">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Enter a tag"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
