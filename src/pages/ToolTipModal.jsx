import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/toolTipModal.module.css";

const ToolTipModal = ({ children }) => {
  const elementRef = useRef(null); // useRef um immer dasselbe div für unser Modal zu haben bei Re-Rendering und nicht jedes Mal ein neues div; Ref ist wie ein Container, der uns jedes Mal dasselbe Div zurück gibt
  if (!elementRef.current) {
    // wenn kein elementRef-Container da ist, erstelle einen:
    elementRef.current = document.createElement("div");
    elementRef.current.className = styles.tooltipmodal;
  }
  useEffect(() => {
    const modalRoot = document.getElementById("modal"); // unser div in html
    modalRoot.appendChild(elementRef.current);

    // wenn das fertig gerendert ist und man das Modal/Tooltipfenster wieder weghaben will: cleanUp (nach component will unmount) ist nötig
    return () => modalRoot.removeChild(elementRef.current);
    // immer wenn man in einen useeffect returnt (z.B. nachdem user auf close tooltip geklickt hat), läuft die cleanup funktion wenn die component unmountet
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current); // div um children an sich nicht nötig, aber später hilfreich für Styling
};

export default ToolTipModal;
