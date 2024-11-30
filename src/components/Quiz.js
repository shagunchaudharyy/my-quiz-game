import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: "Mars",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
      correct: "Shakespeare",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: "Pacific",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [answerFeedback, setAnswerFeedback] = useState("");
  
  const navigate = useNavigate();

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setAnswerFeedback("");
  };

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      setScore(score + 1);
      setAnswerFeedback("Correct!");
    } else {
      setAnswerFeedback("Wrong!");
      setIncorrectAnswers([...incorrectAnswers, questions[currentQuestionIndex].question]);
    }
    setIsSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setIsSubmitted(false);
    setAnswerFeedback("");
  };

  const handleCompleteQuiz = () => {
    // Navigate to final results and pass the results as state
    navigate("/final-results", {
      state: {
        score,
        totalQuestions: questions.length,
        incorrectAnswers,
      },
    });
  };

  return (
    <div className="quiz-page">
      <h2>Quiz Time!</h2>
      <div className="question">
        <h3>{questions[currentQuestionIndex].question}</h3>
        <div className="options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selectedAnswer === option ? (selectedAnswer === questions[currentQuestionIndex].correct ? "correct" : "incorrect") : ""}`}
              onClick={() => handleAnswerSelect(option)}
              disabled={isSubmitted}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="navigation">
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className="submit-btn"
          >
            Submit
          </button>
          {isSubmitted && currentQuestionIndex < questions.length - 1 && (
            <button onClick={handleNextQuestion} className="next-btn">
              Next Question
            </button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleCompleteQuiz} className="complete-btn">
              Complete Quiz
            </button>
          )}
        </div>
        <div className="feedback">
          {answerFeedback && (
            <p className={answerFeedback === "Correct!" ? "correct-feedback" : "incorrect-feedback"}>
              {answerFeedback}
            </p>
          )}
        </div>
      </div>
      <div className="score">
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

export default Quiz;
