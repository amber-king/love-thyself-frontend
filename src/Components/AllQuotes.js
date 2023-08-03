import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AllQuotes() {
  const [quotes, setQuotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quotes");
        const data = await response.json();
        console.log("API Response:", data);
        if (Array.isArray(data.quotes)) {
          setQuotes(data.quotes);
        } else {
          setError("Invaild API response,");
        }

        setLoading(false);
      } catch (error) {
        setError("Error fetching quotes.");
        console.error("Error fetching quotes:", error);
        setLoading(false);
      }
    };

    fetchQuotes();
  }, []);
  console.log("Quotes:", quotes);
  console.log("Quotes Type:", typeof quotes);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <div>
      <h2>All Quotes</h2>
      {quotes.map((quote) => (
        <div key={quote._id}>
          <p>"{quote.content}"</p>
          <p>- {quote.author}</p>
        </div>
      ))}
      <Link to="/">Go back Home</Link>
    </div>
  );
}
