import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// function to fetch all quotes by author
const AuthorQuotes = () => {
  const { authorSlug } = useParams(); // id being modified & return according to users request
  const [authorQuotes, setAuthorQuotes] = useState([]); // state that holds author quotes

  // fetch of all authour quotes - w/ return that displays all quotes for the selected author via button
  useEffect(() => {
    const fetchAuthorQuotes = async () => {
      try {
        const response = await fetch(
          `https://love-thyself-backend-85d7b3d064df.herokuapp.com/api/quotes/by-author/${authorSlug}`
        
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
          <li key={quote._id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorQuotes;
