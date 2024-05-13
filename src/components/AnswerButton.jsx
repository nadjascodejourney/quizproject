import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const AnswerButton = () => {
  const { handleSubmitAnswers, error } = useContext(QuizContext);

  return (
    <div>
      <button onClick={handleSubmitAnswers}>
        {error ? "Versuch´s nochmal" : "Antworten"}
      </button>
    </div>
  );
};

export default AnswerButton;
