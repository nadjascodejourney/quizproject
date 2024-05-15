import { useNavigate } from "react-router-dom";
import styles from "../styles/startButton.module.css";

const StartButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={styles.startBtn} onClick={() => navigate("/quizpage")}>
        Quiz starten
      </button>
    </div>
  );
};

export default StartButton;
