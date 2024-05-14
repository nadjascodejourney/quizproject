import { createContext, useEffect, useState } from "react";
import quizdata from "../data/quizdata.json";

export const QuizContext = createContext(); // Kontext erstellen

const StateManagement = ({ children }) => {
  // States
  const [questionIndex, setQuestionIndex] = useState(0);

  const [availableAnswers, setAvailableAnswers] = useState([]);

  const [userAnswer, setUserAnswer] = useState([]);

  const [error, setError] = useState(null);

  const [success, setSuccess] = useState(null);

  const [lives, setLives] = useState(2); // Leben pro Frage

  const [gameover, setGameover] = useState(false); // Gameover-Status

  useEffect(() => {
    if (questionIndex >= quizdata.length) {
      setSuccess(true);
      return;
    }

    const { answers } = structuredClone(quizdata[questionIndex]);

    const shuffledAnswers = answers.sort(() => Math.random() - 0.5);

    const shuffledFirstIndex = shuffledAnswers.map((answer) => answer[0]);
    const shuffledSecondIndex = shuffledAnswers.map((answer) => answer[1]);

    shuffledFirstIndex.sort(() => Math.random() - 0.5);
    shuffledSecondIndex.sort(() => Math.random() - 0.5);

    setUserAnswer([shuffledFirstIndex, shuffledSecondIndex]);
    setAvailableAnswers(quizdata[questionIndex].answers);
    setError(null);

    setLives(2); //* Leben hier zurücksetzen, damit Spieler für jede Frage zwei Leben hat
  }, [questionIndex]);

  // UseEffect für Display GameoverPage
  useEffect(() => {
    if (lives <= 0) {
      setGameover(true);
      setError(true);
      setSuccess(false); // Erfolg auf false setzen
    }

    if (gameover) {
      console.log("Game Over Seite sollte angezeigt werden");
    }
  }, [lives]);

  //* Funktion zum Prüfen, ob genügend Leben vorhanden sind
  /* const checkLives = () => {
    if (lives <= 0) {
      //! gameover erscheint noch nicht direkt nach Verspielen des letzten Lebens
      setGameover(true);
      setError(true);
      setSuccess(false); // Erfolg auf false setzen

      return false; // return false weil wir die Funktion beenden wollen und checkLives() soll false zurückgeben
    }
    return true; // wenn Leben vorhanden sind, dann geben wir true zurück; wenn wir hier nichts schreiben, würde die Futnktion undefined zurückgeben
  }; */

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
    //* Überprüfen ob genügend Leben vorhanden sind, bevor SubmitFunktion weiter ausgeführt wird
    /* if (checkLives() === false) {
      // wenn keine Leben vorhanden sind und checklives() oben false returned, dann beenden wir die Funktion
      setError(true);
      setGameover(true);
      return; // return, damit die Funktion beendet wird
    } */

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
      setLives(lives - 1); //* Leben abziehen
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
    /*     setLives(2); // Leben zurücksetzen => nicht hier sondern im useEffect. Wenn wir das hier machen, beziehen sich die Leben auf das ganze Spiel und nicht auf jede Frage einzeln */
  };

  return (
    <QuizContext.Provider
      value={{
        quizdata,
        questionIndex,
        availableAnswers,
        userAnswer,
        error,
        success,
        lives,
        gameover,
        setQuestionIndex,
        setAvailableAnswers,
        setUserAnswer,
        setError,
        setSuccess,
        setLives,
        updateAnswersOrder,
        updateQuestionIndex,
        handleSubmitAnswers,
        handleRestart,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default StateManagement;
