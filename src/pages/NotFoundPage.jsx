import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import styles from "../styles/notfoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <section className={styles.errorWrapper}>
        <img src="/assets/icons/shrug-f-svgrepo-com.svg" alt="Clueless Girl" />
        <div className={styles.shadowBox}>
          <h2>Ups, 404!</h2>
          <p>
            Wusstest du, dass 404 ein HTTP-Statuscode ist? <br />
            Leider bedeutet das, dass die gesuchte Seite nicht gefunden wurde.
            Klicke auf Home, um wieder auf die Startseite zurückzukehren.
          </p>
        </div>
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
