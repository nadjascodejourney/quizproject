import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";

const RestartButton = () => {
  const { handleRestart } = useContext(QuizContext);

  return (
    <div>
      <button onClick={handleRestart}>Play A-Gain</button>
    </div>
  );
};

export default RestartButton;
