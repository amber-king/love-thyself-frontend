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
        // console.log("Authors data:", data);
        setAuthors(data.authors);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <div className="author-page">
      <center>
        {" "}
        <h1> All Authors ✍︎ </h1>
        <h4>
          This page contains all the authors and the number of quotes they have
          avaiable, which can be seen by clicking on the desired author
        </h4>
        <p>⚠️ IF no results, then there was no quote that matched the author 🫤</p>
      </center>
      <div className="author-cards">
        {authors && authors.length > 0 ? (
          authors.map((author) => (
            <Link
              key={author._id}
              to={`/author/${encodeURIComponent(author.slug)}`}
              className="author-card"
            >
              <div>
                <span>{author.name}</span> <br></br>
                <span>Quote Count: {author.quoteCount}</span>
              </div>
            </Link>
          ))
        ) : (
          <p>No authors available</p>
        )}
      </div>
    </div>
  );
};

export default AuthorPage;
