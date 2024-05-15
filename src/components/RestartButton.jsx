import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";
import styles from "../styles/restartButton.module.css";

const RestartButton = () => {
  const { handleRestart } = useContext(QuizContext);

  return (
    <div>
      <button onClick={handleRestart} className={styles.restartBtn}>
        Nochmal spielen
      </button>
    </div>
  );
};

export default RestartButton;
