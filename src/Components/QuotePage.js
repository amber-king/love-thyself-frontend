import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Quotes() {
  const { topic } = useParams();
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    const clickedQuoteTopic = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/quotes/${topic}`
        );
        setQuotes(response.data.quotes);
      } catch (error) {
        console.error("No specified quote found:", error);
        setQuotes("Failed to fetch quotes");
      }
    };
    clickedQuoteTopic();
  }, [topic]);

  return (
    <div>
      <h1> {topic} Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.q}>
            <blockquote>
              &ldquo;{quote.q}&rdquo; — <footer>{quote.a}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
