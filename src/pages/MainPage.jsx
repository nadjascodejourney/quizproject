import { NavLink } from "react-router-dom";
import StartButton from "../components/StartButton";
import styles from "../styles/mainPage.module.css";

const MainPage = () => {
  return (
    <div>
       <h1>Quizell</h1>
      <main className={styles.mainarea}>
        <nav>
          <NavLink to="/quizpage">
            <StartButton />
          </NavLink>
        </nav>
      </main>
    </div>
  );
};

export default MainPage;
