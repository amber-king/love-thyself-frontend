import React, { useState, useEffect } from "react";
import QuoteSearch from "./QuoteSearch"; // fetch & function for all quotes search engine

export default function AllQuotes() {
  const [quotes, setQuotes] = useState({}); // state for the quotes
  const [loading, setLoading] = useState(true); // state for loading page
  const [error, setError] = useState(null); // state for error handling
  const [filteredQuotes, setFilteredQuotes] = useState([]); // state for filtering/search engine by keyword

  useEffect(() => {
    // fetch for all the quotes w/ loading page & error handling
    // reset baxk to the orignial batch of all quotes data
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://love-thyself-backend.onrender.com/api/quotes");
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

// search handle for the search engine functionality
  const handleSearch = (searchQuery) => {
    const filteredQuotes = quotes.filter((quote) =>
      quote.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuotes(filteredQuotes);
  };

  // looading page & error page conditions
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }

  // final results of the above code iterated through
  return (
    <div>
      <center>
        <h1 className="allquotes-title">All Quotes “ ”</h1>
        <h4>
          <b>Instructions 📝: </b> Type a keyword in the search engine to
          receive all corresponding quotes for it
        </h4>
        <b>
          <p>
            ⚠️ IF no results, then there was no quote that matched the keyword 🫤
          </p>
        </b>
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
