import React, { useState } from "react";
import quizdata from "../data/quizdata.json";
import { useState } from "react";

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
  const [chosenAnswer, setChosenAnswer] = useState([]);

  const updateChosenAnswer = () => {
  }

  return (
    <div>
      {quizdata.map((question) => (
        <div key={question.questionId}>
          <h3>{question.question}</h3>

          <ul>
            {question.partone.map((answer, id) => (
              <li key={id}>{answer}</li>
            ))}
          </ul>

          <ul>
            {question.parttwo.map((answer, id) => (
              <li key={id} onSelect={(answer) => ()}>{answer}</li>
            ))}
          </ul>

          {/* <GetQuestionPartList answers={question.partone} />
          <GetQuestionPartList answers={question.parttwo} /> */}
        </div>
      ))}
    </div>
  );
};

export default Karusell;
