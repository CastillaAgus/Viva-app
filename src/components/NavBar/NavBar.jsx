import styles from "./NavBar.module.css";
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useState } from "react";

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
};

  return (

    <nav className={styles.navbar} >

      <Link to="/"><img
        className={styles.logo}
        src="./images/logo-grande.png"
        alt="Logo Viva"
      /></Link>

      <ul
        className={`${styles["nav-links"]} ${menuOpen ? styles.active : ""
          }`}>
        <li onClick={closeMenu}><Link to="/">Inicio</Link></li>
        <li onClick={closeMenu}><Link to="/productos">Productos</Link></li>
        <li onClick={closeMenu}><Link to="/nosotros">Nosotros</Link></li>   
        <li onClick={closeMenu}><Link to="/alta">Agregar Productos</Link></li>
      </ul>

      <ul className={styles.actions}>
        <li><FaSearch /></li>
        <li><FaShoppingCart /></li>
        <li><FaUser /></li>
      </ul>

      <div
        className={styles["menu-toggle"]}
        onClick={toggleMenu}
      >
        <FaBars />
      </div>
    </nav>


  )
}
export default NavBar