import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TagQuote = () => {
  const { tagSlug } = useParams();
  const [tagQuotes, setTagQuotes] = useState([]);

  useEffect(() => {
    const fetchTagQuotes = async () => {
      try {
        const response = await fetch(`/api/search/quotes?tag=${tagSlug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tag quotes");
        }
        const data = await response.json();
        setTagQuotes(data.quotes);
      } catch (error) {
        console.error("Error fetching tag quotes:", error);
      }
    };
    fetchTagQuotes();
  }, [tagSlug]);

  return (
    <div className="tag-quotes-page">
      <h2>Quotes related to {tagSlug}</h2>
      <ul>
        {tagQuotes.map((quote) => (
          <li key={quote._id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TagQuote;
