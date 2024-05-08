import { useState } from "react";
import ToolTipModal from "../pages/ToolTipModal"; // Modalkomponente

const HelpButton = () => {
  const [showToolTip, setShowToolTip] = useState(false); // für ToolTipModal
  return (
    <div>
      <button onClick={() => setShowToolTip(true)}>Hilfe</button>
      {showToolTip ? (
        <ToolTipModal>
          <div>
            <p>Spielanleitung</p>
            <button onClick={() => setShowToolTip(false)}>Schließen</button>
          </div>
        </ToolTipModal>
      ) : null}
    </div>
  );
};

export default HelpButton;
