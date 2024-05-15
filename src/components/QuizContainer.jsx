import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";
import styles from "../styles/quizcontainer.module.css";

// components
import Life from "./Life";
import Question from "./Question";
import AnswerMultiple from "./AnswerMultiple";
import HelpButton from "./HelpButton";
import AnswerButton from "./AnswerButton";

const QuizContainer = () => {
  const { success, gameover } = useContext(QuizContext);

  return (
    <>
      {success || gameover ? (
        <div></div>
      ) : (
        <div className={styles.innerQuizcontainer}>
          <Life />
          <Question />
          <AnswerMultiple />
          <HelpButton /> {/* Modal */}
          <AnswerButton />
        </div>
      )}
    </>
  );
};

export default QuizContainer;
