import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TagPage = () => {
  const [tagCategories, setTagCategories] = useState([]);

  useEffect(() => {
    const fetchTagCategories = async () => {
      try {
        const response = await fetch("https://api.quotable.io/tags");
        if (!response.ok) {
          throw new Error("Failed to fetch tag categories");
        }
        const data = await response.json();
        setTagCategories(data);
      } catch (error) {
        console.error("Error fetching tag categories:", error);
      }
    };
    fetchTagCategories();
  }, []);

  return (
    <div className="tag-page">
      {/* <h2>Tag Categories</h2> */}
      <div className="tag-cards">
        {tagCategories.map((tag) => (
          <Link key={tag.slug} to={`/tag/${tag.slug}`} className="tag-card-link">
            <div className="tag-card">
              {tag.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagPage;


