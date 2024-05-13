import { Link } from "react-router-dom";
import RestartButton from "../components/RestartButton";

const ResultPage = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <RestartButton/>
        </Link>
      </nav>
    </div>
  );
};

export default ResultPage;
