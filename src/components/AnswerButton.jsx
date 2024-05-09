import { useNavigate } from "react-router-dom";

const AnswerButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/quizpage")}>Antworten</button>
    </div>
  );
};

export default AnswerButton;
