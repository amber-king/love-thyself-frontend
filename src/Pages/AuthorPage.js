import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AuthorPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("https://api.quotable.io/authors");
        if (!response.ok) {
          throw new Error("Failed to fetch authors");
        }
        const data = await response.json();
        setAuthors(data.results); // Set the authors array from the 'results' property
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <div className="author-page">
      <div className="author-cards">
        {authors.map((author) => (
          <Link
            key={author._id}
            to={`/author/${encodeURIComponent(author.name)}`}
            className="author-card"
          >
            {author.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;

