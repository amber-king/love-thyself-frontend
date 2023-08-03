import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function TagQuote() {
  const { tag } = useParams();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taggedQ = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/quotes/${tag}`);
        const data = await response.json();
        setQuotes(data.quotes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quotes:", error);
        setLoading(false);
      }
    };
    taggedQ();
  }, [tag]);

  return (
    <div>
      <h2> Quotes for {tag}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {quotes.map((quote) => (
            <div key={quote._id}>
              <p>"{quote.quoteText}"</p>
              <p>- {quote.quoteAuthor}</p>
              {quote.tag && <p>Tag: {quote.tag}</p>}
            </div>
          ))}
        </div>
      )}
   
    </div>
  );
}
