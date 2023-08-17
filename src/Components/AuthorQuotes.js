import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AuthorQuotes = () => {
  const { authorSlug } = useParams();
  const [authorQuotes, setAuthorQuotes] = useState([]);

  useEffect(() => {
    const fetchAuthorQuotes = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/quotes/by-author/${authorSlug}`
        
        );
        if (!response.ok) {
          throw new Error("Failed to fetch author quotes");
        }
        const data = await response.json();
        setAuthorQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching author quotes:", error);
      }
    };
    fetchAuthorQuotes();
  }, [authorSlug]);

  return (
    <div className="author-quotes-page">
      <h2>Quotes by {authorSlug}</h2>
      <ul>
        {authorQuotes.map((quote) => (
          <li key={quote._id}></li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorQuotes;
