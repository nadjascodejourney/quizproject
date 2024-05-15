import { useState } from "react";
import ToolTipModal from "../pages/ToolTipModal"; // Modalkomponente
import styles from "../styles/helpButton.module.css";
import GameInstructions from "./GameInstructions";

const HelpButton = () => {
  const [showToolTip, setShowToolTip] = useState(false); // für ToolTipModal
  return (
    <div>
      <button onClick={() => setShowToolTip(true)} className={styles.helpBtn}>
        <img
          src="/assets/icons/question-mark-svgrepo-com.svg"
          alt="Questionmark"
        />
        {/* Die Größe des Icons wird direkt in der .svg file im public folder gesteuert */}
      </button>
      {showToolTip ? (
        <ToolTipModal>
          {/* Styling für das Modal aus ToolTipModal.jsx siehe tooltipModal.module.css */}
          <div>
            <GameInstructions />
            <button
              onClick={() => setShowToolTip(false)}
              className={styles.checkBtn}
            >
              <img
                src="/assets/icons/check-circle-svgrepo-com.svg"
                alt="Checkmark"
              />
            </button>
          </div>
        </ToolTipModal>
      ) : null}
    </div>
  );
};

export default HelpButton;
