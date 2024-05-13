// css
import styles from "../styles/quizPage.module.css";
// context
import StateManagement from "../utils/StateManagement";
// components
import QuizContainer from "../components/QuizContainer";
import ResultPage from "../pages/ResultPage";

const QuizPage = () => {
  return (
    <StateManagement>
      <div className={styles.quizcontainer}>
        <QuizContainer />

        <ResultPage />
      </div>
    </StateManagement>
  );
};

export default QuizPage;
