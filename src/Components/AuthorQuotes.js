import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AuthorQuotes = () => {
  const { authorName } = useParams();
  const [authorQuotes, setAuthorQuotes] = useState([]);

  useEffect(() => {
    const fetchAuthorQuotes = async () => {
      try {
        const response = await fetch(
          `/api/search/quotes?author=${encodeURIComponent(authorName)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch author quotes");
        }
        const data = await response.json();
        setAuthorQuotes(data.quotes); // Use data.quotes instead of data.results
      } catch (error) {
        console.error("Error fetching author quotes:", error);
      }
    };
    fetchAuthorQuotes();
  }, [authorName]);

  return (
    <div className="author-quotes-page">
      <h2>Quotes by {authorName}</h2>
      <ul>
        {authorQuotes.map((quote) => (
          <li key={quote._id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorQuotes;
