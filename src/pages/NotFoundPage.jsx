import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

const NotFoundPage = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <HomeButton />
        </Link>
      </nav>
    </div>
  );
};

export default NotFoundPage;
