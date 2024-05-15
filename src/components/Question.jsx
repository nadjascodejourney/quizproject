// Style
import styles from "../styles/question.module.css"

import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const Question = () => {
  const { quizdata, questionIndex } = useContext(QuizContext);

  return (
    <div className={styles.questionContainer}>
      <h2>{quizdata[questionIndex]?.statement}</h2>
    </div>
  );
};

export default Question;
