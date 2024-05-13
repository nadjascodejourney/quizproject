const CarouselListItems = ({ answers }) => {
  return (
    <div className="questions-container">
      <ul>
        {answers?.length <= 1 && <li></li>}
        {answers.map((answer, id) => (
          <li key={id}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselListItems;
