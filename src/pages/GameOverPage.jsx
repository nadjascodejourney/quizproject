//styles
import styles from "../styles/gameOver.module.css"


import HomeButton from "../components/HomeButton";
import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const GameOverPage = () => {
  const { gameover } = useContext(QuizContext);

  return (
    <>
      {gameover ? (
        <div className={styles.gameOver}>
          <h2>Game Over!</h2>
          <p>Leider hast du alle Leben verloren.</p>
          <p>Möchtest du das Spiel neu starten?</p>
          <HomeButton />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default GameOverPage;
