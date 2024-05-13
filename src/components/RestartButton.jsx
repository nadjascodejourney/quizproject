const RestartButton = ({ handleRestart }) => {
  return (
    <div>
      <button onClick={handleRestart}>Play A-Gain</button>
    </div>
  );
};

export default RestartButton;
