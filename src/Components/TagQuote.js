import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TagQuote() {
  const {tags} = useParams()
const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taggedQ = async () => {
      try {
        const response = await fetch(
          `/api/search/quotes?tags=${tags}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const data = await response.json();
        setQuotes(data.quotes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setLoading(false);
      }
    };
    taggedQ();
  }, [tags]);

  return (
    <div>
      <h2> Quotes for {tags}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {quotes.map((quote) => (
            <div key={quote._id}>
              <p>"{quote.quoteText}"</p>
              <p>- {quote.quoteAuthor}</p>
              {quote.tags && (
                <b>
                  <p>Tags: {Array.from(new Set(quote.tags)).join(", ")}</p>
                </b>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
