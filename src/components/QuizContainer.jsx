import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

// components
import BackButton from "./BackButton";
import Life from "./Life";
import Question from "./Question";
import AnswerMultiple from "./AnswerMultiple";
import HelpButton from "./HelpButton";
import AnswerButton from "./AnswerButton";

const QuizContainer = () => {
  const { success } = useContext(QuizContext);

  return (
    <>
      {success ? (
        <div></div>
      ) : (
        <div>
          <BackButton />
          <Life />
          <Question />
          <AnswerMultiple />
          <HelpButton /> {/* Modal */}
          <AnswerButton />
        </div>
      )}
    </>
  );
};

export default QuizContainer;
