import styles from "../styles/backButton.module.css"

import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")} className={styles.backButton}><img src="/assets/icons/home-svgrepo-com.svg" alt="Home"/></button>
    </div>
  );
};

export default BackButton;
