import RestartButton from "../components/RestartButton";
import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";
import styles from "../styles/resultPage.module.css";

const ResultPage = () => {
  const { success } = useContext(QuizContext);

  return (
    <>
      {success ? (
        <div className={styles.resultContainer}>
          <nav>
            <RestartButton />
          </nav>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ResultPage;
