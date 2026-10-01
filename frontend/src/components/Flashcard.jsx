import React from "react";

export default function Flashcard({ question, answer }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-gray-800 border border-purple-400 p-6">
          <h3 className="text-lg font-bold text-purple-300">{question}</h3>
        </div>
        <div className="flip-card-back bg-black border border-purple-400 p-6">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
