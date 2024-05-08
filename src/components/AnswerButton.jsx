import { Link } from "react-router-dom";

const AnswerButton = () => {
  return (
    <div>
      <button>
        <Link to="/QuizPage">Antworten</Link>
      </button>
    </div>
  );
};

export default AnswerButton;
