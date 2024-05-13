import ArrowButton from "./ArrowButton";
import CarouselListItems from "./CarouselListItems";

const AnswerMultiple = ({ userAnswer, updateAnswersOrder }) => {
  return (
    <div>
      {/* Oberes Karusell */}
      <ArrowButton onClick={() => updateAnswersOrder(0, "-")} arrow={"<"} />
      <CarouselListItems answers={userAnswer[0]} />
      <ArrowButton onClick={() => updateAnswersOrder(0, "+")} arrow={">"} />

      {/* Unteres Karusell */}
      <ArrowButton onClick={() => updateAnswersOrder(1, "-")} arrow={"<"} />
      <CarouselListItems answers={userAnswer[1]} />
      <ArrowButton onClick={() => updateAnswersOrder(1, "+")} arrow={">"} />
    </div>
  );
};

export default AnswerMultiple;
