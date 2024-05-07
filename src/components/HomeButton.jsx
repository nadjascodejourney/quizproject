import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div>
      <button>
        <Link to="/">Back to start</Link>
      </button>
    </div>
  );
};

export default HomeButton;
