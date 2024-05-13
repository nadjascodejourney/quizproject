import { useContext } from "react";
import { QuizContext } from "../utils/StateManagement";
//! funktioniert noch nicht
const CarouselListItems = ({ answers }) => {
  const { userAnswer } = useContext(QuizContext);

  return (
    <div className="questions-container">
      <ul>
        {userAnswer?.length <= 1 && <li></li>}
        {userAnswer.map((answeritem, id) => (
          <li key={id}>{answeritem}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselListItems;
