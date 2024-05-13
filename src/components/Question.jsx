import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const Question = () => {
  const { quizdata, questionIndex } = useContext(QuizContext);

  return (
    <div>
      <h2>{quizdata[questionIndex]?.statement}</h2>
    </div>
  );
};

export default Question;
