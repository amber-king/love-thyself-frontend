import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AuthorPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/authors");
        if (!response.ok) {
          throw new Error("Failed to fetch authors");
        }
        const data = await response.json();
        setAuthors(data.results);
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
          <div key={author._id} className="author-card">
            <Link to={`/author/${encodeURIComponent(author.slug)}`} className="author-name">
              {author.name}
            </Link>
            <p>Quote Count: <b>{author.quoteCount}</b></p>
            <Link to={`/author/${encodeURIComponent(author.slug)}`} className="fetch-quotes-btn">
              Fetch Quotes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
