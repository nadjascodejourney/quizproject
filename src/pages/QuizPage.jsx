import React from "react";
import Life from "../components/Life";
import Question from "../components/Question";
import AnswerMultiple from "../components/AnswerMultiple";
import AnswerTrueFalse from "../components/AnswerTrueFalse";
import AnswerButton from "../components/AnswerButton";

const QuizPage = () => {
  return (
    <div className="quiz-container">

      <section className="life-section">
        <Life />
      </section>

      <section className="question-section">
        <Question />
      </section>

      <section className="answer-multi-section">
        <AnswerMultiple />
      </section>

      <section className="answer-truefalse-section">
        <AnswerTrueFalse />
      </section>

      <section className="answer-button">
        <AnswerButton />
      </section>
    </div>
  );
};

export default QuizPage;
