// hooks

// components
import BackButton from "../components/BackButton";
import Life from "../components/Life";
import Question from "../components/Question";
import AnswerMultiple from "../components/AnswerMultiple";
import HelpButton from "../components/HelpButton";
import AnswerButton from "../components/AnswerButton";

// css
import styles from "../styles/quizPage.module.css";

const QuizPage = () => {
  return (
    <div className={styles.quizcontainer}>
      {/* Achtung: bei module.css keine Bindestriche in classNames, funktioniert sonst nicht */}
      <section className="back-button">
        {/* müsste man evtl. in Header verlagern, siehe Positionierung in Figma */}
        <BackButton />
      </section>
      <section className="life-section">
        <Life />
      </section>
      <section className="question-section">
        <Question />
      </section>

      <section className="answer-multi-section">
        <AnswerMultiple
          userAnswer={userAnswer}
          updateAnswersOrder={updateAnswersOrder}
        />
      </section>

      <section>
        <HelpButton /> {/* Modal */}
      </section>

      <section className="answer-button">
        <AnswerButton />
      </section>
    </div>
  );
};

export default QuizPage;
