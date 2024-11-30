import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import FinalResults from "./components/FinalResults";
import LoginPage from "./components/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/final-results" element={<FinalResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
