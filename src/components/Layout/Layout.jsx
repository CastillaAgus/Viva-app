import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css"
import Hero from "../Hero/Hero";
export function Layout({ children }) {
  return (
    <div>
      <Header  />
      <Hero />
      <main className={styles.container}>
      {children}
      
      </main>
      <Footer />
    </div>
  );
}