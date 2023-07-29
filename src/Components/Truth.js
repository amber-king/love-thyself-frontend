import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Confidence() {
  const [confidenceQ, setConfidenceQ] = useState([]);

  useEffect(() => {
    const getConfidence = async () => {
      try {
        const response = await axios.get("/topic/confidence");
        setConfidenceQ(response.data.quotes);
      } catch (error) {
        console.error("Error no confidence quotes:", error);
      }
    };
    getConfidence();
  }, []);

  return (
    <div>
      <h1>Truth Quotes 🤥</h1>
      {confidenceQ.map((quote) => (
        <ul>
          <li key={quote.q}>
            <blockquote>
              &ldquo;{quote.q}&rdquo; — <footer>{quote.a}</footer>
            </blockquote>
          </li>
        </ul>
      ))}
    </div>
  );
}