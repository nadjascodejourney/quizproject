import { useNavigate } from "react-router-dom";

const NextQuizButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/quizpage")}>Nächste Frage</button>
    </div>
  );
};

export default NextQuizButton;
