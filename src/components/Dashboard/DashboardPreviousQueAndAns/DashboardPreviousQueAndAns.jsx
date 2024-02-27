import React from 'react';
import './DashboardPreviousQueAndAns.css';

function PreviousQueAndAns({ heading, question, questionDescription, answer, answerDescription }) {
  return (
    <div className="previous-que-and-ans">
      <h2>{heading}</h2>
      <div className="question">
        <h3>Question:</h3>
        <p>{question}</p>
      </div>
      <div className="answer">
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default PreviousQueAndAns;
