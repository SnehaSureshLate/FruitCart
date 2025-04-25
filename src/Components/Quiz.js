import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the correct syntax to write an HTML comment?",
      options: ["<!--Comment-->", "//Comment", "#Comment", "/*Comment*/"],
      correctAnswer: "<!--Comment-->",
    },
    {
      question: "What is React.js?",
      options: ["Famework", "Library"],
      correctAnswer: "Library",
    },
    {
      question: "Class denoted by which symbol in CSS?",
      options: ["$", "#", ".", "$"],
      correctAnswer: ".",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelectAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (selectedOption) => {
    const updatedAnswers = [...userSelectAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let calculatedScore = 0;

    for (let i = 0; i < questions.length; i++) {
      if (userSelectAnswers[i] === questions[i].correctAnswer) {
        calculatedScore += 1;
      }
    }

    setScore(calculatedScore);
    setQuizSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1
        style={{
          marginBottom: "20px",
          borderBottom: "2px solid",
          borderTop: "2px solid",
        }}
      >
        Quiz :
      </h1>

      {!quizSubmitted ? (
        <>
          <div>
            <h2>
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p>{questions[currentQuestionIndex].question}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    padding: "10px",
                    margin: "5px 0",
                    backgroundColor:
                      userSelectAnswers[currentQuestionIndex] === option
                        ? "lightgreen"
                        : "whitesmoke",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              style={{
                marginRight: "20px",
                backgroundColor: "wheat",
                color: "black",
              }}
            >
              Previous
            </button>
            {currentQuestionIndex < questions.length - 1 ? (
              <button
                style={{ backgroundColor: "green", color: "white" }}
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={handleSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <h2>Quiz Results</h2>
          <p>
            Your Score is : {score} / {questions.length}
          </p>
          <ul>
            {questions.map((question, index) => {
              const isCorrect =
                userSelectAnswers[index] === question.correctAnswer;
              return (
                <li key={index} style={{ margin: "10px 0" }}>
                  <p>
                    <strong>Q{index + 1}:</strong> {question.question}
                  </p>
                  <p>
                    Your Answer: {userSelectAnswers[index]}{" "}
                    {isCorrect ? "✔️" : "❌"}
                  </p>
                  {!isCorrect && (
                    <p>Correct Answer: {question.correctAnswer}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Quiz;
