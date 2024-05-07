import React from "react";
import BackButton from "../components/BackButton"
import Life from "../components/Life";
import Question from "../components/Question";
import AnswerMultiple from "../components/AnswerMultiple";
import AnswerTrueFalse from "../components/AnswerTrueFalse";
import AnswerButton from "../components/AnswerButton";
import NextQuizButton from "../components/NextQuizButton";
import ShowScoreButton from "../components/ShowScoreButton";

const QuizPage = () => {
  return (
    <div className="quiz-container">

      <section className="back-button">
        <BackButton/>
      </section>

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

      <section className="nextquiz-button">
        <NextQuizButton/>
      </section>

      <section className="showscore-button">
        <ShowScoreButton/>
      </section>


    </div>
  );
};

export default QuizPage;
