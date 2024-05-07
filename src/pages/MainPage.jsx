import { NavLink } from "react-router-dom";
import StartButton from "../components/StartButton"

const MainPage = () => {
  return (
    <div>
      <nav>
        <NavLink to="/quizpage">
          <StartButton/>
        </NavLink>
      </nav>
    </div>
  );
};

export default MainPage;
