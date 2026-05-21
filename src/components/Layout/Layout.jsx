import Footer from "../Footer/Footer";
import styles from "./Layout.module.css"
import { Outlet } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";

export function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <NavBar  />
      <main className={styles.main}>
          <Outlet />
      </main>
      <Footer />
    </div>
  );
}