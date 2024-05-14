// import css module for styling
import styles from "../styles/life.module.css";

import { QuizContext } from "../utils/StateManagement";
import { useContext } from "react";

const Life = () => {
  const { lives } = useContext(QuizContext);

  // Funktion, um die Lebenspunkte als Herzen darzustellen
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < lives; i++) {
      hearts.push(<span key={i} className={styles.heart}></span>);
    }
    return hearts;
  };

  return <div>{renderHearts()}</div>;
};

export default Life;
