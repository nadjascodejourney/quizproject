const ArrowButton = ({ onClick, arrow }) => {
  return (
    <div>
      <button onClick={onClick}>{arrow}</button>
    </div>
  );
};

export default ArrowButton;
