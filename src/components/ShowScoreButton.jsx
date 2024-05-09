import { useNavigate } from "react-router-dom";

const ShowScoreButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("resultpage")}>Dein Ergebnis</button>
    </div>
  );
};

export default ShowScoreButton;
