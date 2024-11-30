import React from "react";
import { useLocation } from "react-router-dom";

function FinalResults() {
  const location = useLocation();
  const { score, totalQuestions, incorrectAnswers } = location.state || { score: 0, totalQuestions: 0, incorrectAnswers: [] };

  return (
    <div className="results-page">
      <h2>Quiz Completed!</h2>
      <p>Your final score: {score} / {totalQuestions}</p>
      <p>Incorrect Questions:</p>
      <ul>
        {incorrectAnswers.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default FinalResults;
