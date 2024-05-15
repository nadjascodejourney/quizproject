import styles from "../styles/header.module.css";

import BackButton from "../components/BackButton";

const Header = () => {

  return (
    <div>
      <header className={styles.headerstyle}>

        <BackButton/>
      </header>
    </div>
  );
};

export default Header;
