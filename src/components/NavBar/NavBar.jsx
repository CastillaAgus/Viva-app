import styles from "./NavBar.module.css"; 
import { useEffect,useState } from "react";

function NavBar (){
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
return(

    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      
      <img className={styles.logo} src="./images/logo.png"/>

      <ul className={styles["nav-links"]}>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Mi carrito</a></li>
      </ul>

      <div className="menu-toggle"></div>
    </nav>


)
}
export default NavBar