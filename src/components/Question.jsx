const Question = () => {
  return (
    <div>
      <h2>{questionsData[questionIndex]?.statement}</h2>
    </div>
  );
};

export default Question;
