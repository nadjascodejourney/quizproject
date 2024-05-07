import { Link } from "react-router-dom";


const StartButton = () => {
  return (
    <div>
      <button>
        <Link to="/QuizPage">Quiz starten</Link>
      </button>
    </div>
  );
};

export default StartButton;
