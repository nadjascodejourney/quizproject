import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

//style
import styles from "../styles/layout.module.css"

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
