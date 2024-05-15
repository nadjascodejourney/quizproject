//style
import styles from "../styles/answerButton.module.css";

import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const AnswerButton = () => {
  const { handleSubmitAnswers, error } = useContext(QuizContext);

  return (
    <div className={styles.container}>
      <button
        onClick={handleSubmitAnswers}
        className={`${styles.answerButton} ${
          error ? styles.answerButtonWrong : ""
        }`}
      >
        {error ? "Try Again" : "Antworten"}
      </button>
    </div>
  );
};

export default AnswerButton;
