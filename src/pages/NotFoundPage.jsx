import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import styles from "../styles/notfoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.errorwrapper}>
        <img src="/assets/icons/shrug-f-svgrepo-com.svg" alt="Clueless Girl" />
        <h2>Ups, 404!</h2>
        <p>
          Wusstest du, dass 404 ein HTTP-Stautscode ist? <br />
          Leider bedeutet das, dass die gesuchte Seite nicht gefunden wurde.
          Klicke hier, um wieder auf die Startseite zurückzukehren.
        </p>
        <nav className={styles.navcontainer}>
          <Link to="/">
            <HomeButton /> {/* styling in eigener file */}
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default NotFoundPage;
