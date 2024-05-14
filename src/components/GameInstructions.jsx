import styles from "../styles/gameInstructions.module.css";

import instructions from "../data/tooltipData.json";

const GameInstructions = () => {
  return (
    <div className={styles.instructionwrapper}>
      <img src="/assets/icons/lightbulb-svgrepo-com.svg" alt="Lightbulb" />
      {Object.keys(instructions).map((key) => (
        <section key={key}>
          <h3>{key}</h3>
          {Array.isArray(instructions[key]) ? (
            <ol className={styles.stepList}>
              {instructions[key].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          ) : (
            <p>{instructions[key]}</p>
          )}
        </section>
      ))}
    </div>
  );
};

export default GameInstructions;

// Object.keys(instructions) gibt ein Array mit den Keys von instructions zurück, also ["Spielregeln", "Spielende", "Spielsteuerung"], dass wir dann als Überschriften verwenden können

//.map() wird auf das Array angewendet, das Object.keys(instructions) zurückgibt. Für jeden Key wird eine eigene section erstellt, die eine Überschrift (h3) und entweder eine Liste (ul) oder ein einfaches Textelement (p) enthält.

//Array.isArray(instructions[key]) prüft, ob der Wert des aktuellen Keys ein Array ist. Wenn ja, wird eine Liste erstellt, wenn nicht, wird ein einfaches p element erstellt.
