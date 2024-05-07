import { NavLink } from "react-router-dom";
import Layout from "../layout/Layout";

const MainPage = () => {
  return (
    <div>
      <nav>
        <NavLink to="/quizpage">
          <button>Start Quiz</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default MainPage;
