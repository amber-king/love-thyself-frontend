import React, { useState, useEffect } from "react";

export default function Happiness() {
  const [happinessQ, setHappinessQ] = useState([]);

  useEffect(() => {
    const getHappinessQ = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/quotes/happiness"
        );
        const data = await response.json();
        setHappinessQ(data.quotes);
      } catch (error) {
        console.error("Error no hapiness quotes:", error);
        setHappinessQ([{ q: "Failed to fetch today's quote", a: "" }]);
      }
    };
    getHappinessQ();
  }, []);

  return (
    <div>
      <h1>Happiness Quotes 😁</h1>
      {happinessQ && happinessQ.length > 0 ? (
        happinessQ.map((quote) => (
          <ul key={quote.q}>
            <li>
              <blockquote>
                &ldquo;{quote.q}&rdquo; — <footer>{quote.a}</footer>
              </blockquote>
            </li>
          </ul>
        ))
      ) : (
        <p>No quotes available for happiness.</p>
      )}
    </div>
  );
}
