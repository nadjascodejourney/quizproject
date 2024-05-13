import { useEffect, useState } from "react";
import quizdata from "../data/quizdata.json";

const StateManagement = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const [availableAnswers, setAvailableAnswers] = useState([]);

  const [userAnswer, setUserAnswer] = useState([]);

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (questionIndex >= quizdata.length) {
      setSuccess(true);
      return;
    }

    const { answers } = structuredClone(quizdata[questionIndex]);
    const firstIndex = answers.map((answer) => answer[0]);
    const secondIndex = answers.map((answer) => answer[1]);
    setUserAnswer([firstIndex, secondIndex]);
    setAvailableAnswers(quizdata[questionIndex].answers);
    setError(null);
  }, [questionIndex]);

  const updateAnswersOrder = (index, action) => {
    setError(null);
    let newOrder = [...userAnswer];

    if (action === "+") {
      const lastElement = newOrder[index].pop();
      newOrder[index].unshift(lastElement);
    } else if (action === "-") {
      const firstElement = newOrder[index].shift();
      newOrder[index].push(firstElement);
    }
    if (newOrder.length === 1) {
      newOrder.unshift(["", ""]);
    }
    setUserAnswer(newOrder);
  };

  const updateQuestionIndex = () => {
    setQuestionIndex(questionIndex + 1);
    if (questionIndex > quizdata.length) {
      setSuccess(true);
    }
  };

  const handleSubmitAnswers = () => {
    if (userAnswer[0][1] === undefined || userAnswer[1][1] === undefined) {
      setError(null);
      updateQuestionIndex();
      return;
    }
    const submittedAnswer = [userAnswer[0][1], userAnswer[1][1]];

    const answerIsCorrect = availableAnswers.some(
      (availableAnswer) =>
        availableAnswer[0] === submittedAnswer[0] &&
        availableAnswer[1] === submittedAnswer[1]
    );
    if (!answerIsCorrect) {
      setError(true);
    } else {
      const filteredUserAnswers = userAnswer.map((answerArray) =>
        answerArray.filter((answer) => !submittedAnswer.includes(answer))
      );
      setUserAnswer(filteredUserAnswers);
    }
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setUserAnswer([[], []]);
    setAvailableAnswers([]);
    setError(null);
    setSuccess(false);
  };

  return <div></div>;
};

export default StateManagement;
