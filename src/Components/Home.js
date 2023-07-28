import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [todaysQuote, setTodaysQuote] = useState("");

  useEffect(() => {
    const getTodayQuote = async () => {
      try {
        const response = await axios.get("/api/quotes/today");
        setTodaysQuote(response.data.quote);
      } catch (error) {
        console.error(error)("No Quote Today:", error);
      }
    };
    getTodayQuote();
  }, []);

  return (
    <div>
      <h1> Today's Quote is: </h1>
      <p>{todaysQuote}</p>
      <div>
        <Link to="/topic/inspiration">Inspiration 💭</Link>
        <Link to="/topic/happiness">Happiness 😁</Link>
        <Link to="/topic/confidence">Confidence 😎 </Link>
        <Link to="/topic/truth">Truth 🤥 </Link>
      </div>
    </div>
  );
}
