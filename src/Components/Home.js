import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Home() {
  const { topic } = useParams();
  const [todaysQuote, setTodaysQuote] = useState([]);

  useEffect(() => {
    const getTodayQuote = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/quotes/today`
        );

        setTodaysQuote(response.data.quotes);
      } catch (error) {
        console.error("Error fetching today's quote:", error);
        setTodaysQuote([{ q: "Failed to fetch today's quote", a: "" }]);
      }
    };
    getTodayQuote();
  }, []);

  console.log(todaysQuote);

  return (
    <div>
      <h3> Today's Quote is ⤵ </h3>
      <ul>
        {todaysQuote.map((todayQ) => (
          <li key={todayQ.q}>
            <blockquote>
              &ldquo;{todayQ.q}&rdquo; — <footer>{todayQ.a}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
