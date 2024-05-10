import React from "react";
import quizdata from "../data/quizdata.json";

const GetQuestionPartList = ({ answers }) => {
  return (
    <ul>
      {answers.map((answer, id) => (
        <li key={id}>{answer}</li>
      ))}
    </ul>
  );
};

const Karusell = () => {
  return (
    <div>
      {quizdata.map((question) => (
        <div key={question.questionId}>
          <h3>{question.question}</h3>
          <GetQuestionPartList answers={question.partone} />
          <GetQuestionPartList answers={question.parttwo} />
        </div>
      ))}
    </div>
  );
};

export default Karusell;
