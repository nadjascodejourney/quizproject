/* import ArrowButton from "./ArrowButton";
 */
/* import CarouselListItems from "./CarouselListItems"; */
// styles
import styles from "../styles/answerMulti.module.css";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const AnswerMultiple = () => {
  const { userAnswer, updateAnswersOrder } = useContext(QuizContext);

  return (
    <div>
      <section className={styles.answerContainer}>
        {/* Oberes Karusell */}
        {/*  <ArrowButton onClick={() => updateAnswersOrder(0, "-")} /> */}
        <button
          onClick={() => updateAnswersOrder(0, "-")}
          className={styles.answerMultiButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/*  <CarouselListItems answers={userAnswer[0]} /> */}
        <ul>
          {userAnswer[0]?.length <= 1 && <li></li>}
          {userAnswer[0]?.map((answer, id) => (
            <li key={id}>{answer}</li>
          ))}
        </ul>
        <button
          onClick={() => updateAnswersOrder(0, "+")}
          className={styles.answerMultiButton}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
      {/*  <ArrowButton onClick={() => updateAnswersOrder(0, "+")} /> */}
      <section className={styles.answerContainer}>
        {/* Unteres Karusell */}
        {/*  <ArrowButton onClick={() => updateAnswersOrder(1, "-")} /> */}
        <button
          onClick={() => updateAnswersOrder(1, "-")}
          className={styles.answerMultiButton}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/*   <CarouselListItems answers={userAnswer[1]} /> */}
        <ul>
          {userAnswer[1]?.length <= 1 && <li></li>}
          {userAnswer[1]?.map((answer, id) => (
            <li key={id}>{answer}</li>
          ))}
        </ul>
        {/* <ArrowButton onClick={() => updateAnswersOrder(1, "+")} /> */}
        <button
          onClick={() => updateAnswersOrder(1, "+")}
          className={styles.answerMultiButton}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </section>
    </div>
  );
};

export default AnswerMultiple;
