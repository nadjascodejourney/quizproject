// css
import styles from "../styles/quizPage.module.css";
// context
import StateManagement from "../utils/StateManagement";
// components
import QuizContainer from "../components/QuizContainer";
import ResultPage from "../pages/ResultPage";
import GameOverPage from "./GameOverPage";

const QuizPage = () => {
  return (
    <StateManagement>
      <div className={styles.quizcontainer}>
        <QuizContainer />
        <ResultPage />
        <GameOverPage />
      </div>
    </StateManagement>
  );
};

export default QuizPage;
