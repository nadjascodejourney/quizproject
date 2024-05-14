/* import ArrowButton from "./ArrowButton";
 */
/* import CarouselListItems from "./CarouselListItems"; */
// styles
import styles from "../styles/answerMulti.module.css"


import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const AnswerMultiple = () => {
  const { userAnswer, updateAnswersOrder } = useContext(QuizContext);

  return (
    <div>
    <section className={styles.answercontainer}>
      {/* Oberes Karusell */}
      {/*  <ArrowButton onClick={() => updateAnswersOrder(0, "-")} /> */}
      <button onClick={() => updateAnswersOrder(0, "-")}>{"<="}</button>
      {/*  <CarouselListItems answers={userAnswer[0]} /> */}
      <ul>
        {userAnswer[0]?.length <= 1 && <li></li>}
        {userAnswer[0]?.map((answer, id) => (
          <li key={id}>{answer}</li>
        ))}
      </ul>
      <button onClick={() => updateAnswersOrder(0, "+")}>{"=>"}</button>
    </section>
      {/*  <ArrowButton onClick={() => updateAnswersOrder(0, "+")} /> */}
    <section className={styles.answercontainer}>
      {/* Unteres Karusell */}
      {/*  <ArrowButton onClick={() => updateAnswersOrder(1, "-")} /> */}
      <button onClick={() => updateAnswersOrder(1, "-")}>{"<="}</button>
      {/*   <CarouselListItems answers={userAnswer[1]} /> */}
      <ul>
        {userAnswer[1]?.length <= 1 && <li></li>}
        {userAnswer[1]?.map((answer, id) => (
          <li key={id}>{answer}</li>
        ))}
      </ul>
      {/* <ArrowButton onClick={() => updateAnswersOrder(1, "+")} /> */}
      <button onClick={() => updateAnswersOrder(1, "+")}>{"=>"}</button>
      </section>
    </div>
  );
};

export default AnswerMultiple;
