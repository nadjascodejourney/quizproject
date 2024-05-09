import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/quizpage")}>Quiz starten</button>
    </div>
  );
};

export default StartButton;
