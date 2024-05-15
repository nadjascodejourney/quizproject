import styles from "../styles/answerMulti.module.css";


//FontAwesome

import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const AnswerMultiple = () => {
  const { userAnswer, updateAnswersOrder } = useContext(QuizContext);

  return (
    <div>
      <section className={styles.answerContainer}>
        {/* Oberes Karusell */}
        {/*  <ArrowButton onClick={() => updateAnswersOrder(0, "-")} /> */}
        <div className={styles.buttonBox}>
          <button
            onClick={() => updateAnswersOrder(0, "-")}
            className={styles.answerMultiButton}
          >
            <img
              src="/assets/icons/arrow-wide-svgrepo-com-left.svg"
              alt="ArrowLeft"
            />
          </button>
          <button
            onClick={() => updateAnswersOrder(0, "+")}
            className={styles.answerMultiButton}
          >
            <img
              src="/assets/icons/arrow-wide-svgrepo-com.svg"
              alt="ArrowRight"
            />
          </button>
        </div>
        {/*  <CarouselListItems answers={userAnswer[0]} /> */}
        <ul>
          {userAnswer[0]?.length <= 1 && <li></li>}
          {userAnswer[0]?.map((answer, id) => (
            <li key={id}>{answer}</li>
          ))}
        </ul>
      </section>
      {/*  <ArrowButton onClick={() => updateAnswersOrder(0, "+")} /> */}

      <section className={styles.answerContainer}>
        {/* Unteres Karusell */}
        {/*  <ArrowButton onClick={() => updateAnswersOrder(1, "-")} /> */}

        {/*   <CarouselListItems answers={userAnswer[1]} /> */}
        <ul>
          {userAnswer[1]?.length <= 1 && <li></li>}
          {userAnswer[1]?.map((answer, id) => (
            <li key={id}>{answer}</li>
          ))}
        </ul>
        {/* <ArrowButton onClick={() => updateAnswersOrder(1, "+")} /> */}

        <div className={styles.buttonBox}>
          <button
            onClick={() => updateAnswersOrder(1, "-")}
            className={styles.answerMultiButton}
          >
            <img
              src="/assets/icons/arrow-wide-svgrepo-com-left.svg"
              alt="ArrowLeft"
            />
          </button>
          <button
            onClick={() => updateAnswersOrder(1, "+")}
            className={styles.answerMultiButton}
          >
            <img
              src="/assets/icons/arrow-wide-svgrepo-com.svg"
              alt="ArrowRight"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AnswerMultiple;
