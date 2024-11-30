import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to the Quiz Game!</h1>
        <p>Test your knowledge with our fun and challenging quiz.</p>
        <Link to="/quiz">
          <button className="start-btn">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
