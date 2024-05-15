import { useNavigate } from "react-router-dom";
import styles from "../styles/homeButton.module.css";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={styles.homeBtn} onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default HomeButton;
