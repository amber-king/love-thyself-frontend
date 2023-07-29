import React, { useState, useEffect } from "react";

export default function Today() {
  const [todaysQ, setTodaysQ] = useState([""]);

  useEffect(() => {
    const getTodayQ = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quotes/today");
        const data = await response.json();
        setTodaysQ(data.quotes);
      } catch (error) {
        console.error("Error no today's quotes:", error);
        setTodaysQ("Failed to fetch today's quote");
      }
    };
    getTodayQ();
  }, []);

  return (
    <div>
      <h1>Today Quotes ☀️</h1>
      <blockquote>
        &ldquo;{todaysQ}&rdquo; — <footer>Author</footer>
      </blockquote>
    </div>
  );
}
