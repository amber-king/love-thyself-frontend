import React, { useState, useEffect } from "react";
import QuoteSearch from "./QuoteSearch";

export default function AllQuotes() {
  const [quotes, setQuotes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quotes");
        const data = await response.json();
        // console.log("API Response:", data);
        if (Array.isArray(data.quotes)) {
          setQuotes(data.quotes);
          setFilteredQuotes(data.quotes);
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
  // console.log("Quotes:", quotes);
  // console.log("Quotes Type:", typeof quotes);

  const handleSearch = (searchQuery) => {
    const filteredQuotes = quotes.filter((quote) =>
      quote.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuotes(filteredQuotes);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }

  return (
    <div>
      <center>
        <h1 className="allquotes-title">All Quotes “ ”</h1>
        <h4>
          <b>Instructions 📝: </b> Type a keyword in the search engine to receive
          all corresponding quotes for it
        </h4>
        <p>
          ⚠️ IF no results, then there was no quote that matched the keyword 🫤
        </p>
      </center>

      <QuoteSearch onSearch={(searchQuery) => handleSearch(searchQuery)} />

      {filteredQuotes.map((quote) => (
        <div className="card" key={quote._id}>
          <b>
            <p>"{quote.content}"</p>
          </b>
          <p>- {quote.author}</p>
          {quote.tags && (
            <b>
              <p>Tags: {Array.from(new Set(quote.tags)).join(", ")}</p>
            </b>
          )}
        </div>
      ))}
    </div>
  );
}
