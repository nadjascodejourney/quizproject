import { NavLink } from "react-router-dom";

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
